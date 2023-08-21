import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import MenuHome from "./Router/Menu/MenuHome";
// import routeHome from "./Router/Route/RouteHome";
import App from "./App";
import { Provider } from "react-redux";
import storeRedux from "./Redux/Store/storeRedux";
import MenuHome from "./Router/Menu/MenuHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={storeRedux}>
        <MenuHome />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
