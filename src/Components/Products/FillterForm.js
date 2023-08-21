import React from "react";
import { useSelector } from "react-redux";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function FillterForm(props) {
  let stateRedux = useSelector((state) => state);
  let listCategories = stateRedux.categoryReducer.listCategories;

  let items = "";
  // Hiển thị category trong fillter forrm
  if (listCategories.content) {
    items = listCategories.content.map((category, index) => {
      return (
        <option value={category.id} key={index}>
          {category.name}
        </option>
      );
    });
  }
  console.log();
  return (
    <div>
      <Container>
        <h3>Lọc sản phẩm:</h3>
        <Form>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              {/* Tìm kiếm */}
              <FormGroup>
                <Label for="search">Search: </Label>
                <Input
                  id="search"
                  name="search"
                  placeholder="Nhập nội dung tìm kiếm"
                  type="search"
                  onChange={(event) => {}}
                />
              </FormGroup>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <FormGroup>
                <Label for="Category">Phân loại sản phẩm: </Label>
                <Input
                  id="Category"
                  name="Category"
                  type="select"
                  onChange={(event) => {}}
                >
                  <option value={""}>Tất cả</option>
                  {items}
                </Input>
              </FormGroup>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <FormGroup>
                <Label for="Material">Chất liệu: </Label>
                <Input
                  id="Material"
                  name="Material"
                  type="select"
                  onChange={(event) => {}}
                >
                  <option value={""}>Tất cả</option>
                  <option value={"_8GB"}>Gốm sứ</option>
                  <option value={"_12GB"}>Thủy tinh</option>
                  <option value={"_16GB"}>Nhựa</option>
                </Input>
              </FormGroup>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              {/* Min price */}
              <FormGroup>
                <Label for="min-price">Min price: </Label>
                <Input
                  id="min-price"
                  name="min-price"
                  placeholder="Min price"
                  type="number"
                  step={"1000"}
                  onChange={(event) => {}}
                />
              </FormGroup>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              {/* Max price */}
              <FormGroup>
                <Label for="max-price">Max price: </Label>
                <Input
                  id="max-price"
                  name="max-price"
                  placeholder="Max price"
                  type="number"
                  step={"1000"}
                  onChange={(event) => {}}
                />
              </FormGroup>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              {/* Min date */}
              <FormGroup>
                <Label for="min-price">Min date: </Label>
                <Input
                  id="min-date"
                  name="min-date"
                  type="date"
                  onChange={(event) => {}}
                />
              </FormGroup>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              {/* Max date */}
              <FormGroup>
                <Label for="max-price">Max date: </Label>
                <Input
                  id="max-date"
                  name="max-date"
                  type="date"
                  onChange={(event) => {}}
                />
              </FormGroup>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              {/* Năm tạo từ */}
              <FormGroup>
                <Label for="min-year">Min year: </Label>
                <Input
                  id="min-year"
                  name="min-year"
                  placeholder="Min year"
                  type="number"
                  step={"1"}
                  onChange={(event) => {}}
                />
              </FormGroup>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              {/* Năm tạo đến */}
              <FormGroup>
                <Label for="max-year">Max year: </Label>
                <Input
                  id="max-year"
                  name="max-year"
                  placeholder="Max year"
                  type="number"
                  step={"1"}
                  onChange={(event) => {}}
                />
              </FormGroup>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
              <Button color="primary" outline>
                Submit
              </Button>
            </div>
            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
              <Button color="danger" outline>
                Refresh
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default FillterForm;
