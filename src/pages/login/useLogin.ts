import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { instance } from "../../utils/instance";
import { ENDPOINTS } from "../../constants/endpoints";

const useLogin = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (data: { username: string; password: string }) =>
      await instance.post(ENDPOINTS.login, data),
    onSuccess: (res) => {
      Cookies.set("access", res.data.token.accessToken);
      Cookies.set("refresh", res.data.token.refreshToken);
      location.reload();
    },
    onError: () => {
      console.log("failed");
    },
  });

  const onLogin = function (values: { username: string; password: string }) {
    mutate(values);
  };

  return { form, mutate, onLogin };
};

export default useLogin;
