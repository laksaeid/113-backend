// import { useQuery } from "@tanstack/react-query";
// import AddCategory from "./AddCategory";
// import { ENDPOINTS } from "../constants/endpoints";
// import { instance } from "../utils/instance";
// import { Categories } from "../types/categories";
// import { SubCategoriesType } from "../types/subCategories";
// import AddSubCategory from "./AddSubCategory";
import AddProduct from "./AddProduct";

const AddCategories = () => {
  //   const { data } = useQuery<Categories>({
  //     queryKey: [ENDPOINTS.categories],
  //     queryFn: async () => (await instance(ENDPOINTS.categories)).data,
  //   });
  //   const { data: subCategories } = useQuery<SubCategoriesType>({
  //     queryKey: [ENDPOINTS.subcategories],
  //     queryFn: async () =>
  //       (await instance(ENDPOINTS.subcategories + "?limit=99")).data,
  //   });

  return (
    <>
      {/* {data?.data.categories?.map((i) => (
        <p>{i.name}</p>
      ))}
      <AddCategory />
      {subCategories?.data.subcategories?.map((i) => (
        <p>{i.name}</p>
      ))}
      <AddSubCategory categories={data} /> */}
      <AddProduct />
    </>
  );
};

export default AddCategories;
