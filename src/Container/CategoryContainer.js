import React, { useEffect } from "react";
import { Container } from "reactstrap";
import CreateButtonCategory from "../Components/Category/CreateButtonCategory";
import FillterFormCategory from "../Components/Category/FillterFormCategory";
import ResultFormCategory from "../Components/Category/ResultFormCategory";
import ModalCreateNewCategory from "./../Components/Category/CreateNewCategory/ModalCreateNewCategory";
import { useDispatch, useSelector } from "react-redux";
import { closeFormAction, showFormAction } from "../Redux/Action/FormAction";
import {
  actionAddNewCategoryAPI,
  actionDeleteCategoryAPI,
  actionFetchListCategoriesAPI,
  actionUpdateCategoryAPI,
} from "../Redux/Action/CategoryAction";
import ModalUpdateCategory from "../Components/Category/UpdateCategory/ModalUpdateCategory";
import {
  actionFetchCategoryUpdateInfoRedux,
  actionTogleFormRedux,
} from "../Redux/Action/FormUpdateAction";

function CategoryContainer(props) {
  //
  // Khai báo hook để dispach Action
  let dispatchRedux = useDispatch();
  // Khai báo hook để lấy State từ Redux
  let stateRedux = useSelector((state) => state);

  // Khai báo hàm callBack khi click nút creat new
  let onHandleButtonCreateNewCategory = () => {
    dispatchRedux(showFormAction());
  };
  // Khai báo hàm callBack khi click nút close
  let onHandleCloseModalFormCategory = () => {
    dispatchRedux(closeFormAction());
  };

  // Khai báo hàm callback lấy data khi ấn nút create ở inputform category
  let onHandleCategoryDataFromInput = (newCategory) => {
    dispatchRedux(actionAddNewCategoryAPI(newCategory));
    dispatchRedux(closeFormAction());
  };
  //
  let onHandleDeleteCategory = (idDelete) => {
    dispatchRedux(actionDeleteCategoryAPI(idDelete));
  };
  
  // Hàm Callback xử lý khi nhấn nút Edit
  let onHandleEdit = (categoryEdit) => {
    // Lưu thông tin Account cần Update vào Redux
    dispatchRedux(actionFetchCategoryUpdateInfoRedux(categoryEdit));
    // Mở UpdateForm
    dispatchRedux(actionTogleFormRedux());
  };
  //
  // Khai bao ham xu ly khi an nut update
  let onHandleUpdateCategory = async (categoryUpdateForm) => {
    let id_Update = stateRedux.formUpdateReducer.categoryUpdateInfo;
    let categoryUpdate_API = {
      id: id_Update,
      category_Update: categoryUpdateForm,
    };
    // Gọi API để Update Account
    await dispatchRedux(actionUpdateCategoryAPI(categoryUpdate_API));

    // Đóng InputForm
    await dispatchRedux(actionTogleFormRedux());

    // Gọi API để cập nhật lại ResultForm
    await dispatchRedux(actionFetchListCategoriesAPI());
  };
  //
  // Khai bao useEffect
  useEffect(() => {
    dispatchRedux(actionFetchListCategoriesAPI());
  }, []);
  //
  //

  return (
    <div>
      <Container>
        <FillterFormCategory />
        <br />
        <CreateButtonCategory
          onHandleButtonCreateNewCategory={onHandleButtonCreateNewCategory}
          onHandleCloseModalFormCategory={onHandleCloseModalFormCategory}
        />
        <ModalCreateNewCategory
          onHandleCloseModalFormCategory={onHandleCloseModalFormCategory}
          onHandleCategoryDataFromInput={onHandleCategoryDataFromInput}
        />
        <ModalUpdateCategory onHandleUpdateCategory={onHandleUpdateCategory} />
        <ResultFormCategory
          onHandleDeleteCategory={onHandleDeleteCategory}
          onHandleEdit={onHandleEdit}
        />
      </Container>
    </div>
  );
}

export default CategoryContainer;
