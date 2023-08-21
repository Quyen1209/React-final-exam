import React from "react";
import { Route, Routes } from "react-router-dom";

import Category from "./../../Page/Category";
import Products from "./../../Page/Products";
import Account from "./../../Page/Account";
import NotPage404 from "../../Page/NotPage404";
import HomePage from "./../../Page/HomePage";

let route = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/category" element={<Category />} />
    <Route path="/products" element={<Products />} />
    <Route path="/account" element={<Account />} />
    <Route path="*" element={<NotPage404 />} />
  </Routes>
);

export default route;
