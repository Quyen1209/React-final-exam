import React from "react";
import { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
function InputFormCreateAccount(props) {
  let { onHandleAccountDataFromInput } = props;
  // Khai báo state quản lý dữ liệu form
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [role, setRole] = useState("");
  // Khai báo hàm handle create
  let handleCreateAccount = () => {
    let accountNew = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      role: role,
    };
    onHandleAccountDataFromInput(accountNew);
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
        <Button color="primary" onClick={handleCreateAccount}>
          Create
        </Button>

        <Button color="danger" onClick={handlerResetAccount}>
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default InputFormCreateAccount;
