import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

function InputFormCreateProduct(props) {
  // Nhan props
  let { onHandleProductDataFromInput } = props;

  // Khai báo state quản lý dữ liệu form
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [salePrice, setSalePrice] = useState("");
  let [thumbnailUrl, setThumbnailUrl] = useState("");
  let [description, setDescription] = useState("");
  let [material, setMaterial] = useState("");
  let [category, setCategory] = useState("");
  // Khai báo hàm handle create
  let handleCreate = () => {
    // Lấy giữ liệu từ form nhập liệu, tạo 1 object chứa thông tin của account cần thêm mới
    let productsNew = {
      name: name,
      price: price,
      salePrice: salePrice,
      thumbnailUrl: thumbnailUrl,
      ram: material,
      description: description,
      categoryId: category,
    };
    onHandleProductDataFromInput(productsNew);
  };
  // Khai báo hàm handle create
  let handlerReset = () => {
    setName("");
    setPrice("");
    setSalePrice("");
    setThumbnailUrl("");
    setDescription("");
    setMaterial("");
    setCategory("");
  };
  //
  let stateRedux = useSelector((state) => state);
  let listCategories = stateRedux.categoryReducer.listCategories;
  // Hiển thị category trong create new products modal form
  let items = listCategories.content.map((category, index) => {
    return (
      <option value={category.id} key={index}>
        {category.name}
      </option>
    );
  });
  return (
    <Container>
      <Form>
        {/* Name */}
        <FormGroup>
          <Label for="Name">Name: </Label>
          <Input
            id="Name"
            name="Name"
            placeholder="Input Name"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Price */}
        <FormGroup>
          <Label for="Price">Price: </Label>
          <Input
            id="Price"
            name="Price"
            placeholder="Input Price"
            type="number"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </FormGroup>

        {/* sale Price */}
        <FormGroup>
          <Label for="salePrice">Sale Price: </Label>
          <Input
            id="salePrice"
            name="salePrice"
            placeholder="Input sale Price"
            type="number"
            value={salePrice}
            onChange={(event) => {
              setSalePrice(event.target.value);
            }}
          />
        </FormGroup>
        {/* Thumbnail url */}
        <FormGroup>
          <Label for="thumbnailUrl">Thumbnail Url: </Label>
          <Input
            id="thumbnailUrl"
            name="thumbnailUrl"
            placeholder="Input thumbnailUrl"
            type="text"
            value={thumbnailUrl}
            onChange={(event) => {
              setThumbnailUrl(event.target.value);
            }}
          />
        </FormGroup>
        {/* description */}
        <FormGroup>
          <Label for="description">Description: </Label>
          <Input
            id="description"
            name="description"
            placeholder="Input description"
            type="text"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </FormGroup>

        {/* Category */}
        <FormGroup>
          <Label for="Category">Select a Category: </Label>
          <Input
            id="Category"
            name="Category"
            type="select"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            {items}
          </Input>
        </FormGroup>

        {/* Matẻial */}
        <FormGroup>
          <Label for="Material">Select a Material: </Label>
          <Input
            id="Material"
            name="Material"
            type="select"
            value={material}
            onChange={(event) => {
              setMaterial(event.target.value);
            }}
          >
            <option value={"_8GB"}>Gốm sứ</option>
            <option value={"_12GB"}>Thủy tinh</option>
            <option value={"_16GB"}>Nhựa</option>
          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Form>
        <Button color="primary" onClick={handleCreate}>
          Create
        </Button>

        <Button color="danger" onClick={handlerReset}>
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default InputFormCreateProduct;
