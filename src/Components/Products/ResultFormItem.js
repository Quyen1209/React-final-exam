import React from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

function ResultFormItem(props) {
  //
  let { onHandleDeleteProduct, onHandleEdit } = props;
  //
  let stateRedux = useSelector((state) => state);
  let listProducts = stateRedux.productReducer.listProducts;

  // ham xuly khi ng dung click delete
  let handleDeleteProduct = (idDelete) => {
    onHandleDeleteProduct(idDelete);
  };
  // Ham xu ly khi an nut edit
  let handleEdit = (productEdit) => {
    onHandleEdit(productEdit);
  };

  //
  let items = "";
  //
  // Hien thi thanh phan cua listProduct: su dung vong lap map
  if (listProducts.content) {
    items = listProducts.content.map((content, index) => {
      return (
        <tr key={index}>
          <th scope="row">{content.id}</th>
          <td>{content.name}</td>
          <td>{content.price}</td>
          <td>{content.salePrice}</td>
          <td>
            <img
              src={content.thumbnailUrl}
              alt="description of image"
              style={{ width: "10" }}
            />
          </td>
          <td>{content.description}</td>
          <td>{content.ram}</td>
          <td>{content.createdDate}</td>
          <td>{content.updatedAt}</td>
          <td>{content.category.name}</td>
          <td>
            <Button
              active
              color="success"
              outline
              onClick={() => handleEdit(content)}
            >
              Edit
            </Button>
          </td>
          <td>
            <Button
              active
              color="danger"
              outline
              onClick={() => handleDeleteProduct(content.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  }

  return items;
}

export default ResultFormItem;
