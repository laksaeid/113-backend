import useLogin from "./useLogin";

const Login = () => {
  const { form, onLogin } = useLogin();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form
        onSubmit={form.handleSubmit(onLogin, console.log)}
        className="border w-96 h-96 flex flex-col justify-center items-center rounded-md shadow-md gap-3"
      >
        <input
          type="text"
          {...form.register("username")}
          placeholder="username"
          className="border outline-none shadow-md p-2 rounded-md"
        />
        <input
          type="text"
          {...form.register("password")}
          placeholder="password"
          className="border outline-none shadow-md p-2 rounded-md"
        />
        <input
          type="submit"
          value={"login"}
          className="bg-black text-white rounded-md px-6 py-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Login;
