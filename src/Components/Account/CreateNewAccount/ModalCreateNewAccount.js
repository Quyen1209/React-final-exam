import React from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import InputFormCreateAccount from "./InputFormCreateAccount";
import { useSelector } from "react-redux";
function ModalCreateNewAccount(props) {
  let { onHandleCloseModalFormAccount, onHandleAccountDataFromInput } = props;
  // Lấy giá trị State đang lưu trên Redux để sử dụng
  let stateRedux = useSelector((state) => state);
  // console.log("stateRedux: ", stateRedux);
  let showForm = stateRedux.showForm.showForm;
  //
  let handleHide = () => {
    onHandleCloseModalFormAccount();
  };
  return (
    <Container>
      <br />
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          <InputFormCreateAccount
            onHandleAccountDataFromInput={onHandleAccountDataFromInput}
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

export default ModalCreateNewAccount;
