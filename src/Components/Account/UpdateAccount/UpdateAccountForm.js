import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
function UpdateAccountForm(props) {
  let { onHandleUpdateAccount } = props;
  // Khai báo state quản lý dữ liệu form
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [role, setRole] = useState("");
  // Lấy các State từ Redux
  let stateRedux = useSelector((state) => state);
  let stateAccountUpdateInfoRedux =
    stateRedux.formUpdateReducer.accountUpdateInfo;
  // Gọi useEffect
  useEffect(() => {
    setUsername(stateAccountUpdateInfoRedux.username);
    setPassword(stateAccountUpdateInfoRedux.password);
    setFirstName(stateAccountUpdateInfoRedux.firstName);
    setLastName(stateAccountUpdateInfoRedux.lastName);
    setRole(stateAccountUpdateInfoRedux.role);
  }, []);

  // Khai báo hàm handle update
  let handleUpdateAccount = () => {
    let id_form = stateRedux.formUpdateReducer.accountUpdateInfo.id;
    console.log("id_form_account_update", id_form);
    let accountUpdate = {
      id: id_form,
      password: password,
      firstName: firstName,
      lastName: lastName,
      role: role,
    };
    onHandleUpdateAccount(accountUpdate);
  };

  // Khai báo hàm handle reset
  let handlerResetAccount = () => {
    setUsername("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setRole("");
  };
  return (
    <Container>
      <Form>
        {/* Username */}
        <FormGroup>
          <Label for="username">Username: </Label>
          <Input
            disabled
            id="username"
            name="username"
            placeholder="Input Username"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </FormGroup>
        {/* Password */}
        <FormGroup>
          <Label for="password">Password: </Label>
          <Input
            id="password"
            name="password"
            placeholder="Input password"
            type="text"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </FormGroup>
        {/* firstName */}
        <FormGroup>
          <Label for="firstName">First Name: </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Input first Name"
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </FormGroup>
        {/* lastName */}
        <FormGroup>
          <Label for="lastName">Last Name: </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Input last Name"
            type="text"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </FormGroup>
        {/* Role */}
        <FormGroup>
          <Label for="role">Role: </Label>
          <Input
            id="role"
            name="role"
            type="select"
            value={role}
            onChange={(event) => {
              setRole(event.target.value);
            }}
          >
            <option value={""}>Select Role</option>
            <option value={"EMPLOYEE"}>Employee</option>
            <option value={"ADMIN"}>Admin</option>
            <option value={"MANAGER"}>Manager</option>
          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Form>
        <Button color="primary" onClick={handleUpdateAccount}>
          Update
        </Button>

        <Button color="danger" onClick={handlerResetAccount}>
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateAccountForm;
