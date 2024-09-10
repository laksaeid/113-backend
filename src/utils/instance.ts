import axios from "axios";
const baseURL = "http://localhost:8000";
import Cookies from "js-cookie";
export const instance = axios.create({ baseURL });

instance.interceptors.request.use((req) => {
  const config = req;
  config.headers["Authorization"] = `Bearer ${Cookies.get("accessToken")}`;
  return config;
});
