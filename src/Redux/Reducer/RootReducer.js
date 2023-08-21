import { combineReducers } from "redux";
import AccountReducer from "./AccountReducer";
import CategoryReducer from "./CategoryReducer";
import FormReducer from "./FormReducer";
import ProductReducer from "./ProductReducer";
import FormUpdateReducer from "./FormUpdateReducer";

const RootReducers = combineReducers({
  showForm: FormReducer,
  productReducer: ProductReducer,
  categoryReducer: CategoryReducer,
  accountReducer: AccountReducer,
  formUpdateReducer: FormUpdateReducer,
});

export default RootReducers;
