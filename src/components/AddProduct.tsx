import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ENDPOINTS } from "../constants/endpoints";
import { ProductFormType, productSchema } from "../schema/productSchema";
import { Categories } from "../types/categories";
import { SubCategoriesType } from "../types/subCategories";
import { instance } from "../utils/instance";
import { CustomInput } from "./customInput";

const AddProduct = () => {
  const qc = useQueryClient();
  const form = useForm<ProductFormType>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      category: "",
      subcategory: "",
      brand: "",
      description: "",
      name: "",
      price: undefined,
      quantity: undefined,
    },
  });
  console.log(form.watch());

  const { mutate } = useMutation({
    mutationFn: async (data: FormData) =>
      await instance.post(ENDPOINTS.products, data),
    onSuccess: () => {
      form.reset();
      qc.invalidateQueries({ queryKey: [ENDPOINTS.products] });
    },
  });

  const { data: categories } = useQuery<Categories>({
    queryKey: [ENDPOINTS.categories],
    queryFn: async () => (await instance(ENDPOINTS.categories)).data,
  });

  const { data: subCategories } = useQuery<SubCategoriesType>({
    queryKey: [ENDPOINTS.subcategories, form.watch("category")],
    queryFn: async () =>
      (
        await instance(
          ENDPOINTS.subcategories + `?category=${form.watch("category")}`
        )
      ).data,
    enabled: !!form.watch("category"),
  });
  const onSubmit = (data: ProductFormType) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("subcategory", data.subcategory);
    formData.append("brand", data.brand);
    formData.append("description", data.description);
    formData.append("price", data.price.toString());
    formData.append("quantity", data.quantity.toString());
    formData.append("thumbnail", data.thumbnail[0]);
    mutate(formData);
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <select {...form.register("category")}>
        {categories?.data.categories?.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>
      <select {...form.register("subcategory")}>
        {subCategories?.data.subcategories?.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>
      <CustomInput control={form.control} name="name" label="نام" />
      <CustomInput control={form.control} name="brand" label="برند" />
      <CustomInput control={form.control} name="description" label="توضیحات" />
      <CustomInput
        type="number"
        control={form.control}
        name="price"
        label="قیمت"
      />
      <CustomInput
        type="number"
        control={form.control}
        name="quantity"
        label="موجودی"
      />
      <input type="file" {...form.register("thumbnail")} />
      {/* <input type="file" multiple {...form.register("images")} /> */}
      <button type="submit" className="bg-blue-500 px-4 py-2 rounded-md mt-2">
        ایجاد
      </button>
    </form>
  );
};

export default AddProduct;
