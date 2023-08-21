import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";

function InputFormCreateCategory(props) {
  let { onHandleCategoryDataFromInput } = props;
  // Khai báo state quản lý dữ liệu form
  let [categoryName, setCategoryName] = useState("");
  //
  // Khai báo hàm handle create
  let handleCreateCategory = () => {
    // Lấy giữ liệu từ form nhập liệu, tạo 1 object chứa thông tin của account cần thêm mới
    let categoryNew = {
      name: categoryName,
    };
    onHandleCategoryDataFromInput(categoryNew);
  };
  // Khai báo hàm handle reset
  let handlerResetCategory = () => {
    setCategoryName("");
  };
  return (
    <Container>
      <Form>
        {/* Category Name */}
        <FormGroup>
          <Label for="category_name">Category Name: </Label>
          <Input
            id="category_name"
            name="category_name"
            placeholder="Input Category Name"
            type="text"
            value={categoryName}
            onChange={(event) => {
              setCategoryName(event.target.value);
            }}
          />
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Form>
        <Button color="primary" onClick={handleCreateCategory}>
          Create
        </Button>

        <Button color="danger" onClick={handlerResetCategory}>
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default InputFormCreateCategory;
