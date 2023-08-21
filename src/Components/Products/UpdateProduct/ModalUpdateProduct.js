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
import InputFormUpdateProduct from "./InputFormUpdateProduct";
import { actionTogleFormRedux } from "./../../../Redux/Action/FormUpdateAction";

function ModalUpdateProduct(props) {
  let { onHandleUpdateProduct } = props;
  // Khai báo hook để dispach Action
  let dispatchRedux = useDispatch();
  // Lấy giá trị State đang lưu trên Redux để sử dụng
  let stateRedux = useSelector((state) => state.formUpdateReducer);
  // console.log("stateRedux: ", stateRedux);
  let isOpen = stateRedux.isShowFormUpdate;

  let handleHide = () => {
    dispatchRedux(actionTogleFormRedux());
  };

  return (
    <Container>
      <br />
      <Modal isOpen={isOpen}>
        <ModalHeader>
          <h3>Create New Products</h3>
        </ModalHeader>
        <ModalBody>
          <InputFormUpdateProduct
            onHandleUpdateProduct={onHandleUpdateProduct}
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

export default ModalUpdateProduct;
