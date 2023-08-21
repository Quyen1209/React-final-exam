import { api } from "../API/api";

// get listProduct API
const getListProductAPI = () => {
  return api("GET", "products", null);
};

// Add New Product
const addProductNewAPI = (productNew) => {
  return api("POST", "products", productNew);
};

// Delete Product
const deleteProductAPI = (id) => {
  let url = "products/" + id;
  return api("DELETE", url, null);
};

// Update Product
const updateProductAPI = (productUpdate) => {
  let url = "products/" + productUpdate.id.id;
  return api("PUT", url, productUpdate.product_Update);
};
export {
  getListProductAPI,
  addProductNewAPI,
  deleteProductAPI,
  updateProductAPI,
};
