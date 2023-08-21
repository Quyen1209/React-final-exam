import { DELETE_PRODUCT, FETCH_LIST_PRODUCT } from "../Constant/ActionType";

// Khai bao state quan ly showForm
var initialState = {
  listProducts: [],
};
// Khai bao reducer, truyen vao cac state
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_PRODUCT:
      let listProductsApi = action.payload;
      return { ...state, listProducts: listProductsApi };
    case DELETE_PRODUCT:
      console.log(
        "log o reduver -----------------------------------------------------------------------"
      );
      let idDelete = action.payload;
      console.log(" id delete", idDelete);
      let listProductsState = state.listProducts;

      let indexDelete = listProductsState.findIndex(
        (product) => product.id === idDelete
      );
      listProductsState.splice(indexDelete, 1);
      return { ...state, listProducts: listProductsState };
    default:
      return { ...state };
  }
};

export default ProductReducer;
