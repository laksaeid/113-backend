import { useQuery } from "@tanstack/react-query";
import { Layout } from "./components";
import AddCategories from "./components/AddCategories";
import { ENDPOINTS } from "./constants/endpoints";
import { instance } from "./utils/instance";
import { ProductType } from "./types/product";

function App() {
  const { data } = useQuery<ProductType>({
    queryKey: [ENDPOINTS.products],
    queryFn: async () =>
      (await instance(ENDPOINTS.products + "?limit=99999")).data,
  });
  return (
    <Layout>
      <AddCategories />
      <div>
        {data?.data.products?.map((i) => (
          <p>{i.name}</p>
        ))}
      </div>
    </Layout>
  );
}

export default App;
