import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ENDPOINTS } from "../constants/endpoints";
import { CategoryFormType, categorySchema } from "../schema/categorySchema";
import { instance } from "../utils/instance";
import { CustomInput } from "./customInput";

const AddCategory = () => {
  const qc = useQueryClient();

  const form = useForm<CategoryFormType>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (data: CategoryFormType) =>
      await instance.post(ENDPOINTS.categories, data),
    onSuccess: () => {
      qc.invalidateQueries({
        queryKey: [ENDPOINTS.categories],
      });
      form.reset();
    },
  });

  const onSubmit: SubmitHandler<CategoryFormType> = function (values) {
    mutate(values);
  };

  return (
    <FormProvider {...form}>
      <div className="myContainer">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <p className="font-bold text-2xl">Add Category</p>
          <CustomInput control={form.control} name="name" label="نام گروه" />
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-md mt-2"
          >
            ایجاد
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default AddCategory;
