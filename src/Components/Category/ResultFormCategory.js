import React from "react";
import { Container, Table } from "reactstrap";
import ResultFormCategoryIteam from "./ResultFormCategoryIteam";
function ResultFormCategory(props) {
  let { onHandleDeleteCategory, onHandleEdit } = props;
  return (
    <Container>
      <br />
      <Table hover responsive size="">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Created Date</th>
            <th>Updated At</th>
            <th>Chỉnh sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormCategoryIteam
            onHandleDeleteCategory={onHandleDeleteCategory}
            onHandleEdit={onHandleEdit}
          />
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultFormCategory;
