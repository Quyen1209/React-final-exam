import React, { useEffect } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Products/CreateButton";
import ModalCreateNewProduct from "../Components/Products/CreateNewProduct/ModalCreateNewProduct";
import ResultForm from "../Components/Products/ResultForm";
import FillterForm from "./../Components/Products/FillterForm";
// import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { closeFormAction, showFormAction } from "../Redux/Action/FormAction";
import {
  actionAddNewProductAPI,
  actionDeleteProductAPI,
  actionFetchListProductsAPI,
  actionUpdateProductAPI,
} from "../Redux/Action/ProductAction";
import { actionFetchListCategoriesAPI } from "../Redux/Action/CategoryAction";
import ModalUpdateProduct from "../Components/Products/UpdateProduct/ModalUpdateProduct";
import {
  actionFetchProductUpdateInfoRedux,
  actionTogleFormRedux,
} from "../Redux/Action/FormUpdateAction";

function ProductsContainer(props) {
  //
  // Khai báo hook để dispach Action
  let dispatchRedux = useDispatch();
  // Khai báo hook để lấy State từ Redux
  let stateRedux = useSelector((state) => state);
  //
  // Khai báo hàm callBack khi click nút creat new account
  let onHandleButtonCreateNewProduct = () => {
    dispatchRedux(showFormAction());
  };
  // Khai báo hàm callBack khi click nút close
  let onHandleCloseModalFormProduct = () => {
    dispatchRedux(closeFormAction());
  };
  //

  // Khai báo hàm callback lấy data khi ấn nút create ở inputform
  let onHandleProductDataFromInput = (newProduct) => {
    let productNew_API = {
      name: newProduct.name,
      price: newProduct.price,
      salePrice: newProduct.salePrice,
      thumbnailUrl: newProduct.thumbnailUrl,
      ram: newProduct.ram,
      description: newProduct.description,
      categoryId: newProduct.categoryId,
    };

    dispatchRedux(actionAddNewProductAPI(productNew_API));
    dispatchRedux(closeFormAction());
  };
  //
  let onHandleDeleteProduct = (idDelete) => {
    dispatchRedux(actionDeleteProductAPI(idDelete));
  };
  //
  // Khai bao useEffect
  useEffect(() => {
    dispatchRedux(actionFetchListProductsAPI());
    dispatchRedux(actionFetchListCategoriesAPI());
  }, []);
  //
  // Ham xu ly khi an nut Update
  let onHandleUpdateProduct = async (accountUpdateForm) => {
    let id_Update = stateRedux.formUpdateReducer.productUpdateInfo;
    let productUpdate_API = {
      id: id_Update,
      product_Update: accountUpdateForm,
    };
    console.log("productUpdate_API o container", productUpdate_API);
    // Gọi API để Update Account
    await dispatchRedux(actionUpdateProductAPI(productUpdate_API));

    // Đóng InputForm
    await dispatchRedux(actionTogleFormRedux());

    // Gọi API để cập nhật lại ResultForm
    await dispatchRedux(actionFetchListProductsAPI());
  };
  //
  // Hàm Callback xử lý khi nhấn nút Edit
  let onHandleEdit = (productEdit) => {
    // Lưu thông tin Account cần Update vào Redux
    dispatchRedux(actionFetchProductUpdateInfoRedux(productEdit));
    // Mở UpdateForm
    dispatchRedux(actionTogleFormRedux());
  };
  //
  return (
    <Container>
      <FillterForm />
      <br />
      {/* Nut Create new products */}
      <CreateButton
        onHandleButtonCreateNewProduct={onHandleButtonCreateNewProduct}
      />
      {/* Modal create new products */}
      <ModalCreateNewProduct
        onHandleCloseModalFormProduct={onHandleCloseModalFormProduct}
        onHandleProductDataFromInput={onHandleProductDataFromInput}
      />
      <ModalUpdateProduct onHandleUpdateProduct={onHandleUpdateProduct} />
      {/* Table */}
      <ResultForm
        onHandleDeleteProduct={onHandleDeleteProduct}
        onHandleEdit={onHandleEdit}
      />
    </Container>
  );
}

export default ProductsContainer;
