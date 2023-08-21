import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

function ResultFormCategoryIteam(props) {
  let { onHandleDeleteCategory, onHandleEdit } = props;
  //
  let stateRedux = useSelector((state) => state);
  let listCategories = stateRedux.categoryReducer.listCategories;
  //

  let handleDeleteCategory = (idDelete) => {
    onHandleDeleteCategory(idDelete);
  };
  //
  // Hàm xử lý khi nhấn nút Edit
  let handleEdit = (categoryEdit) => {
    onHandleEdit(categoryEdit);
  };
  //
  let items = "";
  if (listCategories.content) {
    items = listCategories.content.map((content, index) => {
      return (
        <tr key={index}>
          <th scope="row">{content.id}</th>
          <td>{content.name}</td>
          <td>{content.createdDate}</td>
          <td>{content.updatedAt}</td>
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
              onClick={() => handleDeleteCategory(content.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  }
  //

  return items;
}

export default ResultFormCategoryIteam;
