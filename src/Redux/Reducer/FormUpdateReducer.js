import {
  FETCH_ACCOUNT_UPDATE_INFO,
  FETCH_CATEGORY_UPDATE_INFO,
  FETCH_PRODUCT_UPDATE_INFO,
  TOGLE_FORM_UPATE,
} from "../Constant/ActionType";

var initialState = {
  isShowFormUpdate: false,
  accountUpdateInfo: {},
  productUpdateInfo: {},
  categoryUpdateInfo: {},
};

const FormUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_FORM_UPATE:
      return {
        ...state,
        isShowFormUpdate: !state.isShowFormUpdate,
      };
    case FETCH_ACCOUNT_UPDATE_INFO:
      return {
        ...state,
        accountUpdateInfo: action.payload,
      };
    case FETCH_PRODUCT_UPDATE_INFO:
      return {
        ...state,
        productUpdateInfo: action.payload,
      };
    case FETCH_CATEGORY_UPDATE_INFO:
      return {
        ...state,
        categoryUpdateInfo: action.payload,
      };
    default:
      return { ...state };
  }
};

export default FormUpdateReducer;
