import { useForm } from "react-hook-form";
import { Categories } from "../types/categories";
import {
  SubCategoryFormType,
  subCategorySchema,
} from "../schema/subCategorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomInput } from "./customInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ENDPOINTS } from "../constants/endpoints";
import { instance } from "../utils/instance";

interface Props {
  categories: Categories | undefined;
}
const AddSubCategory = ({ categories }: Props) => {
  const qc = useQueryClient();
  const form = useForm<SubCategoryFormType>({
    resolver: zodResolver(subCategorySchema),
    defaultValues: {
      category: "",
      name: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (data: SubCategoryFormType) =>
      await instance.post(ENDPOINTS.subcategories, data),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: [ENDPOINTS.subcategories],
      });
      form.reset();
    },
  });

  const onSubmit = (values: SubCategoryFormType) => {
    mutate(values);
  };

  return (
    <div className="mt-5">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <select {...form.register("category")}>
          {categories?.data.categories?.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
        <CustomInput control={form.control} label="نام زیرگروه" name="name" />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded-md mt-2">
          ایجاد
        </button>
      </form>
    </div>
  );
};

export default AddSubCategory;
