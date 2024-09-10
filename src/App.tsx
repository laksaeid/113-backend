import { useQuery } from "@tanstack/react-query";
import { instance } from "./utils/instance";
import { ProductType } from "./types/product";
import { ENDPOINTS } from "./constants/endpoints";
import { Layout } from "./components";

function App() {
  const { data } = useQuery<ProductType>({
    queryKey: [ENDPOINTS.products.get],
    queryFn: async () => (await instance(ENDPOINTS.products.get)).data,
  });

  return (
    <Layout>
      {data?.data.products?.map((item) => (
        <p key={item._id}> {item.name} </p>
      ))}
    </Layout>
  );
}

export default App;
