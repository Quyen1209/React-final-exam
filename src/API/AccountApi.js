import { api } from "./api";

// get listAccount API
const getListAccountAPI = () => {
  return api("GET", "accounts", null);
};

// Add New Account
const addAccountNewAPI = (accountNew) => {
  return api("POST", "accounts", accountNew);
};

// Delete Account
const deleteAccountAPI = (id) => {
  let url = "accounts/" + id;
  return api("DELETE", url, null);
};

// Update Account
const updateAccountAPI = (accountUpdate) => {
  let url = "accounts/" + accountUpdate.id.id;
  console.log("accountUpdate.id.id API", accountUpdate.id.id);
  console.log("accountUpdate.account_Update API", accountUpdate.account_Update);
  return api("PUT", url, accountUpdate.account_Update);
};
export {
  getListAccountAPI,
  addAccountNewAPI,
  deleteAccountAPI,
  updateAccountAPI,
};
