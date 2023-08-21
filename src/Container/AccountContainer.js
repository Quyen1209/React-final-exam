import React, { useEffect } from "react";
import { Container } from "reactstrap";
import FillterFormAccount from "../Components/Account/FillterFormAccount";
import CreateButtonAccount from "./../Components/Account/CreateButtonAccount";
import ModalCreateNewAccount from "./../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ResultFormAccount from "./../Components/Account/ResultFormAccount";
import { useDispatch, useSelector } from "react-redux";
import { closeFormAction, showFormAction } from "../Redux/Action/FormAction";
import {
  actionAddNewAccountAPI,
  actionDeleteAccountAPI,
  actionFetchListAccountsAPI,
  actionUpdateAccountAPI,
} from "../Redux/Action/AccountAction";
import ModalUpdateAccount from "../Components/Account/UpdateAccount/ModalUpdateAccount";
import {
  actionFetchAccountUpdateInfoRedux,
  actionTogleFormRedux,
} from "../Redux/Action/FormUpdateAction";

function AccountContainer(props) {
  // // Khai báo hook để dispach Action
  let dispatchRedux = useDispatch();
  // Khai báo hook để lấy State từ Redux
  let stateRedux = useSelector((state) => state);

  // Khai báo hàm callBack khi click nút creat new account
  let onHandleButtonCreateNewAccount = () => {
    dispatchRedux(showFormAction());
  };
  // Khai báo hàm callBack khi click nút close
  let onHandleCloseModalFormAccount = () => {
    dispatchRedux(closeFormAction());
  };

  // Khai báo hàm callback lấy data khi ấn nút create ở inputform account
  let onHandleAccountDataFromInput = (newAccount) => {
    dispatchRedux(actionAddNewAccountAPI(newAccount));
    dispatchRedux(closeFormAction());
  };
  // Khai bao ham xu ly khi an nut update
  let onHandleUpdateAccount = async (accountUpdateForm) => {
    let id_Update = stateRedux.formUpdateReducer.accountUpdateInfo;
    let accountUpdate_API = {
      id: id_Update,
      account_Update: accountUpdateForm,
    };
    // Gọi API để Update Account
    await dispatchRedux(actionUpdateAccountAPI(accountUpdate_API));

    // Đóng InputForm
    await dispatchRedux(actionTogleFormRedux());

    // Gọi API để cập nhật lại ResultForm
    await dispatchRedux(actionFetchListAccountsAPI());
  };
  //
  // Hàm Callback xử lý khi nhấn nút Edit
  let onHandleEdit = (accountEdit) => {
    // Lưu thông tin Account cần Update vào Redux
    dispatchRedux(actionFetchAccountUpdateInfoRedux(accountEdit));
    // Mở UpdateForm
    dispatchRedux(actionTogleFormRedux());
  };
  //

  // Khai bao useEffect
  useEffect(() => {
    dispatchRedux(actionFetchListAccountsAPI());
  }, []);
  //
  // Ham callback xu ly xoa account
  let onHandleDelete = (id) => {
    dispatchRedux(actionDeleteAccountAPI(id));
  };
  //
  return (
    <div>
      <Container>
        <FillterFormAccount />
        <br />
        <CreateButtonAccount
          onHandleButtonCreateNewAccount={onHandleButtonCreateNewAccount}
        />
        <ModalCreateNewAccount
          onHandleCloseModalFormAccount={onHandleCloseModalFormAccount}
          onHandleAccountDataFromInput={onHandleAccountDataFromInput}
        />
        <ModalUpdateAccount onHandleUpdateAccount={onHandleUpdateAccount} />
        <ResultFormAccount
          onHandleDelete={onHandleDelete}
          onHandleEdit={onHandleEdit}
        />
      </Container>
    </div>
  );
}

export default AccountContainer;
