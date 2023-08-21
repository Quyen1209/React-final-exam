import {
  addProductNewAPI,
  deleteProductAPI,
  getListProductAPI,
  updateProductAPI,
} from "../../API/ProductApi";
import { DELETE_PRODUCT, FETCH_LIST_PRODUCT } from "../Constant/ActionType";

// Action call API lay data listProduct tu API
export const actionFetchListProductsAPI = () => {
  return (dispatch) => {
    return getListProductAPI().then((response) => {
      dispatch(actionFetchListProductsRedux(response));
    });
  };
};
// Action de luu du lieu API vua lay dc vao listProducts Redux quan ly
const actionFetchListProductsRedux = (listProducts) => {
  return {
    type: FETCH_LIST_PRODUCT,
    payload: listProducts,
  };
};

// Acction theem moi product
export const actionAddNewProductAPI = (productNew) => {
  return (dispatch) => {
    return addProductNewAPI(productNew).then((response) => {
      // res: string (boi vi backend tra ve void)
      dispatch(actionFetchListProductsAPI());
    });
  };
};

// Acction Xoa product
export const actionDeleteProductAPI = (id) => {
  return (dispatch) => {
    return deleteProductAPI(id).then((response) => {
      console.log(
        "log o action --------------------------------------------------"
      );
      // res: string (boi vi backend tra ve void)
      dispatch(actionFetchListProductsAPI());
    });
  };
};
const actionDeleteProductRedux = (idDelete) => {
  return {
    type: DELETE_PRODUCT,
    payload: idDelete,
  };
};

// Acction Update Product
// Không sử dụng thunk ở đây do không cần thiết
export const actionUpdateProductAPI = (productUpdate_API) => {
  return (dispatch) => {
    return updateProductAPI(productUpdate_API).then((response) => {
      console.log("productUpdate_API o action ", productUpdate_API);
    });
  };
};
