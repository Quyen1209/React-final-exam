import {
  addAccountNewAPI,
  deleteAccountAPI,
  getListAccountAPI,
  updateAccountAPI,
} from "../../API/AccountApi";
import { DELETE_ACCOUNT, FETCH_LIST_ACCOUNT } from "../Constant/ActionType";

// Action call API lay data listAccounts tu API
export const actionFetchListAccountsAPI = () => {
  return (dispatch) => {
    return getListAccountAPI().then((response) => {
      dispatch(actionFetchListAccountsRedux(response));
    });
  };
};
// Action de luu du lieu API vua lay dc vao listProducts Redux quan ly
const actionFetchListAccountsRedux = (listAccounts) => {
  return {
    type: FETCH_LIST_ACCOUNT,
    payload: listAccounts,
  };
};
// Acction theem moi account
export const actionAddNewAccountAPI = (accountNew) => {
  return (dispatch) => {
    return addAccountNewAPI(accountNew).then((response) => {
      // res: string (boi vi backend tra ve void)
      dispatch(actionFetchListAccountsAPI());
    });
  };
};
// Acction Xoa account
export const actionDeleteAccountAPI = (id) => {
  return (dispatch) => {
    return deleteAccountAPI(id).then((response) => {
      // res: string (boi vi backend tra ve void)
      dispatch(actionFetchListAccountsAPI());
    });
  };
};
const actionDeleteAccountRedux = (idDelete) => {
  return {
    type: DELETE_ACCOUNT,
    payload: idDelete,
  };
};
// Acction Update Account
// Không sử dụng thunk ở đây do không cần thiết
export const actionUpdateAccountAPI = (accountUpdate_API) => {
  return (dispatch) => {
    return updateAccountAPI(accountUpdate_API).then((response) => {
      console.log("accountUpdate_API", accountUpdate_API);
    });
  };
};
