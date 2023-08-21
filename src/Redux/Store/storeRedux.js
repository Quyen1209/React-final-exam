import { applyMiddleware, compose, createStore } from "redux";
import RootReducers from "../Reducer/RootReducer";
import thunk from "redux-thunk";

const middleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const storeRedux = createStore(RootReducers, middleware);

export default storeRedux;
