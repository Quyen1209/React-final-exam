import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import InputFormCreateProduct from "./InputFormCreateProduct";
import { useSelector } from "react-redux";

function ModalCreateNewProduct(props) {
  let { onHandleCloseModalFormProduct, onHandleProductDataFromInput } = props;
  // Lấy giá trị State đang lưu trên Redux để sử dụng
  let stateRedux = useSelector((state) => state);
  // console.log("stateRedux: ", stateRedux);
  let showForm = stateRedux.showForm.showForm;

  let handleHide = () => {
    onHandleCloseModalFormProduct();
  };

  return (
    <Container>
      <br />
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Products</h3>
        </ModalHeader>
        <ModalBody>
          <InputFormCreateProduct
            onHandleProductDataFromInput={onHandleProductDataFromInput}
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

export default ModalCreateNewProduct;
