import React from "react";
import { Container, Button } from "reactstrap";
function CreateButton(props) {
  let { onHandleButtonCreateNewProduct } = props;
  let handleClick = () => {
    onHandleButtonCreateNewProduct();
  };
  return (
    <div>
      <Container>
        <br />
        <Button color="success" outline onClick={handleClick}>
          Create New Product
        </Button>
      </Container>
    </div>
  );
}

export default CreateButton;
