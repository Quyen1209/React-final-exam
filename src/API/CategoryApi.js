import { api } from "./api";

// get listCategory API
const getListCategoryAPI = () => {
  return api("GET", "categories", null);
};

// Add New Category
const addCategoryNewAPI = (categoryNew) => {
  return api("POST", "categories", categoryNew);
};

// Delete Category
const deleteCategoryAPI = (id) => {
  let url = "categories/" + id;
  return api("DELETE", url, null);
};

// Update Category
const updateCategoryAPI = (categoryUpdate) => {
  let url = "categories/" + categoryUpdate.id.id;
  return api("PUT", url, categoryUpdate.category_Update);
};
export {
  getListCategoryAPI,
  addCategoryNewAPI,
  deleteCategoryAPI,
  updateCategoryAPI,
};
