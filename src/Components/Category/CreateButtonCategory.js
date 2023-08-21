import React from "react";
import { Container, Button } from "reactstrap";
function CreateButtonCategory(props) {
  let { onHandleButtonCreateNewCategory } = props;
  let handleClick = () => {
    onHandleButtonCreateNewCategory();
  };
  return (
    <div>
      <Container>
        <br />
        <Button color="success" outline onClick={handleClick}>
          Create New Category
        </Button>
      </Container>
    </div>
  );
}

export default CreateButtonCategory;
