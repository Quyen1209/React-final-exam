import React from "react";
import { Container, Table } from "reactstrap";
import ResultFormAccountItem from "./ResultFormAccountItem";
function ResultFormAccount(props) {
  let { onHandleDelete, onHandleEdit } = props;
  return (
    <Container>
      <br />
      <Table hover responsive size="">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Full Name</th>
            <th>Role</th>
            <th>Created Date</th>
            <th>Updated At</th>
            <th>Chỉnh sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormAccountItem
            onHandleDelete={onHandleDelete}
            onHandleEdit={onHandleEdit}
          />
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultFormAccount;
