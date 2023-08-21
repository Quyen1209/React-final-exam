import { CLOSE_FORM_AcT, SHOW_FORM_AcT } from "../Constant/ActionType";

// Khai bao state quan ly showForm
var initialState = {
  showForm: false,
};

// Khai bao reducer, truyen vao cac state

let FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM_AcT: // Xử lý Action showForm
      return {
        ...state,
        showForm: true,
      };

    case CLOSE_FORM_AcT: // Xử lý Action showForm
      return false;
    default:
      return state; // Chú ý cần return về state mặc định nếu không sẽ gặp lỗi.
  }
};

export default FormReducer;
