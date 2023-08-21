import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
function UpdateCategoryForm(props) {
  let { onHandleUpdateCategory } = props;
  // Khai báo state quản lý dữ liệu form
  let [categoryName, setCategoryName] = useState("");
  // Lấy các State từ Redux
  let stateRedux = useSelector((state) => state);
  let stateCategoryUpdateInfoRedux =
    stateRedux.formUpdateReducer.categoryUpdateInfo;

  // Gọi useEffect
  useEffect(() => {
    setCategoryName(stateCategoryUpdateInfoRedux.name);
  }, []);

  // Khai báo hàm handle update
  let handleUpdateCategory = () => {
    let id_form = stateRedux.formUpdateReducer.categoryUpdateInfo.id;
    console.log("id_form_category_update", id_form);
    let accountUpdate = {
      id: id_form,
      name: categoryName,
    };
    onHandleUpdateCategory(accountUpdate);
  };

  // Khai báo hàm handle reset
  let handlerResetAccount = () => {
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
        <Button color="primary" onClick={handleUpdateCategory}>
          Update
        </Button>

        <Button color="danger" onClick={handlerResetAccount}>
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateCategoryForm;
