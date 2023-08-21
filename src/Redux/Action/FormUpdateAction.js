import {
  FETCH_ACCOUNT_UPDATE_INFO,
  FETCH_CATEGORY_UPDATE_INFO,
  FETCH_PRODUCT_UPDATE_INFO,
  TOGLE_FORM_UPATE,
} from "../Constant/ActionType";

// Chuyển đổi trạng thái đóng mở của Account
export const actionTogleFormRedux = () => {
  return {
    type: TOGLE_FORM_UPATE,
  };
};

// Lưu thông tin của Account Update lên redux
export const actionFetchAccountUpdateInfoRedux = (accountUpdate) => {
  return {
    type: FETCH_ACCOUNT_UPDATE_INFO,
    payload: accountUpdate,
  };
};

// Lưu thông tin của Product Update lên redux
export const actionFetchProductUpdateInfoRedux = (productUpdate) => {
  return {
    type: FETCH_PRODUCT_UPDATE_INFO,
    payload: productUpdate,
  };
};
// Lưu thông tin của Product Update lên redux
export const actionFetchCategoryUpdateInfoRedux = (categoryUpdate) => {
  return {
    type: FETCH_CATEGORY_UPDATE_INFO,
    payload: categoryUpdate,
  };
};
