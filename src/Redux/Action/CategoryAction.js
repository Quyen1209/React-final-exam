import {
  addCategoryNewAPI,
  deleteCategoryAPI,
  getListCategoryAPI,
  updateCategoryAPI,
} from "../../API/CategoryApi";
import { DELETE_CATEGORY, FETCH_LIST_CATEGORY } from "../Constant/ActionType";

// Action call API lay data listCAtegory tu API
export const actionFetchListCategoriesAPI = () => {
  return (dispatch) => {
    return getListCategoryAPI().then((response) => {
      dispatch(actionFetchListCategoriesRedux(response));
    });
  };
};
// Action de luu du lieu API vua lay dc vao listCAtegory Redux quan ly
const actionFetchListCategoriesRedux = (listCategories) => {
  return {
    type: FETCH_LIST_CATEGORY,
    payload: listCategories,
  };
};
// Acction theem moi category
export const actionAddNewCategoryAPI = (categoryNew) => {
  return (dispatch) => {
    return addCategoryNewAPI(categoryNew).then((response) => {
      // res: string (boi vi backend tra ve void)
      dispatch(actionFetchListCategoriesAPI());
    });
  };
};
// Acction Xoa category
export const actionDeleteCategoryAPI = (id) => {
  return (dispatch) => {
    return deleteCategoryAPI(id).then((response) => {
      // res: string (boi vi backend tra ve void)
      dispatch(actionFetchListCategoriesAPI());
    });
  };
};
const actionDeleteCategoryRedux = (idDelete) => {
  return {
    type: DELETE_CATEGORY,
    payload: idDelete,
  };
};

// Acction Update Account
// Không sử dụng thunk ở đây do không cần thiết
export const actionUpdateCategoryAPI = (categoryUpdate_API) => {
  return (dispatch) => {
    return updateCategoryAPI(categoryUpdate_API).then((response) => {});
  };
};
