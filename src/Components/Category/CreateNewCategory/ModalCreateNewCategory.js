import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import InputFormCreateCategoryteCategory from "./InputFormCreateCategory";
import { useSelector } from "react-redux";
function ModalCreateNewCategory(props) {
  let { onHandleCloseModalFormCategory, onHandleCategoryDataFromInput } = props;
  // Lấy giá trị State đang lưu trên Redux để sử dụng
  let stateRedux = useSelector((state) => state);
  // console.log("stateRedux: ", stateRedux);
  let showForm = stateRedux.showForm.showForm;
  let handleHide = () => {
    onHandleCloseModalFormCategory();
  };
  return (
    <Container>
      <br />
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Category</h3>
        </ModalHeader>
        <ModalBody>
          <InputFormCreateCategoryteCategory
            onHandleCategoryDataFromInput={onHandleCategoryDataFromInput}
          />
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

export default ModalCreateNewCategory;
