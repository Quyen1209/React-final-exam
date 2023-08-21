import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

function ResultFormAccountItem(props) {
  let { onHandleDelete, onHandleEdit } = props;
  let stateRedux = useSelector((state) => state);
  let listAccounts = stateRedux.accountReducer.listAccounts;
  // Khai bao ham handleDelete
  let handleDelete = (id) => {
    onHandleDelete(id);
  };
  // Hàm xử lý khi nhấn nút Edit
  let handleEdit = (accountEdit) => {
    onHandleEdit(accountEdit);
  };

  let items = "";
  if (listAccounts.content) {
    items = listAccounts.content.map((content, index) => {
      return (
        <tr key={index}>
          <th scope="row">{content.id}</th>
          <td>{content.username}</td>
          <td>{content.fullName}</td>
          <td>{content.role}</td>
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
              onClick={() => handleDelete(content.id)}
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

export default ResultFormAccountItem;
