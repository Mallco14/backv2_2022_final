import axios from "axios";

const productsApi = axios.create({
  baseURL: "https://63a286cbba35b96522f87492.mockapi.io/products",
});

export const getProducts = async () => {
  const res = await productsApi.get("/");
  return res.data;
};

export const getProductById = (id) => productsApi.get(`/${id}`);

export const createProduct = (product) => productsApi.post("/", product);

export const updateProduct = (product) =>
  productsApi.put(`/${product.id}`, product);

export const deleteProduct = (id) => productsApi.delete(`/${id}`);

export default productsApi;
