import React from "react";
import { Container, Table } from "reactstrap";
import ProductsPaginations from "./ProductsPaginations";
import ResultFormItem from "./ResultFormItem";
function ResultForm(props) {
  let { onHandleDeleteProduct, onHandleEdit } = props;

  return (
    <Container>
      <br />
      <Table hover responsive size="">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Giá nêm yết</th>
            <th>Giá bán</th>
            <th>Image</th>
            <th>Mô tả</th>
            <th>Chất liệu</th>
            <th>Ngày tạo</th>
            <th>Ngày chỉnh sửa</th>
            <th>Phân loại</th>
            <th>Chỉnh sửa</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItem
            onHandleDeleteProduct={onHandleDeleteProduct}
            onHandleEdit={onHandleEdit}
          />
        </tbody>
      </Table>
      <ProductsPaginations />
    </Container>
  );
}

export default ResultForm;
