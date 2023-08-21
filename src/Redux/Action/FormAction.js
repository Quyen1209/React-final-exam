import { CLOSE_FORM_AcT, SHOW_FORM_AcT } from "../Constant/ActionType";

// Action show form
export const showFormAction = () => {
  return { type: SHOW_FORM_AcT };
};
// Action close form
export const closeFormAction = () => {
  return { type: CLOSE_FORM_AcT };
};
