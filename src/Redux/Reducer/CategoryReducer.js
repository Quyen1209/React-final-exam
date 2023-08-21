import { DELETE_CATEGORY, FETCH_LIST_CATEGORY } from "../Constant/ActionType";

// Khai bao state quan ly showForm
var initialState = {
  listCategories: [],
};
// Khai bao reducer, truyen vao cac state
const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_CATEGORY:
      let listCategoriesApi = action.payload;
      return { ...state, listCategories: listCategoriesApi };
    case DELETE_CATEGORY:
      let idDelete = action.payload;
      let listCategoriesState = state.listCategories;
      let indexDelete = listCategoriesState.findIndex(
        (category) => category.id === idDelete
      );
      listCategoriesState.splice(indexDelete, 1);

      return { ...state, listCategories: listCategoriesState };
    default:
      return { ...state };
  }
};

export default CategoryReducer;
