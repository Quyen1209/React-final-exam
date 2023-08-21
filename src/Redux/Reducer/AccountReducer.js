import { DELETE_ACCOUNT, FETCH_LIST_ACCOUNT } from "../Constant/ActionType";

// Khai bao state quan ly showForm
var initialState = {
  listAccounts: [],
};
// Khai bao reducer, truyen vao cac state
const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_ACCOUNT:
      let listAccountsApi = action.payload;
      return { ...state, listAccounts: listAccountsApi };
    case DELETE_ACCOUNT:
      let idDelete = action.payload;
      let listAccountState = state.listAccounts;
      let indexDelete = listAccountState.findIndex(
        (account) => account.id === idDelete
      );
      listAccountState.splice(indexDelete, 1);

      return { ...state, listAccounts: listAccountState };
    default:
      return { ...state };
  }
};

export default AccountReducer;
