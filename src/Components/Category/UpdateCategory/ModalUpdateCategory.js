import React from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import UpdateForm from "./UpdateCategoryForm";
import { actionTogleFormRedux } from "../../../Redux/Action/FormUpdateAction";
import UpdateCategoryForm from "./UpdateCategoryForm";

function ModalUpdateCategory(props) {
  let { onHandleUpdateCategory } = props;
  // Khai báo hook để dispach Action
  let dispatchRedux = useDispatch();

  // Lấy giá trị State đang lưu trên Redux để sử dụng
  let stateRedux = useSelector((state) => state.formUpdateReducer);
  // console.log("stateRedux: ", stateRedux);
  let isOpen = stateRedux.isShowFormUpdate;
  // Hàm xử lý khi nhấn nút Close
  let handleHide = () => {
    //Dispath action để thay đổi State: isShowFormUpdate
    dispatchRedux(actionTogleFormRedux());
  };
  return (
    <Container>
      <br />
      <Modal isOpen={isOpen}>
        <ModalHeader>
          <h3>Update Category</h3>
        </ModalHeader>
        <ModalBody>
          <UpdateCategoryForm onHandleUpdateCategory={onHandleUpdateCategory} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleHide}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalUpdateCategory;
