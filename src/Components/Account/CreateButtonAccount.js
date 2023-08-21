import React from "react";
import { Container, Button } from "reactstrap";

function CreateButtonAccount(props) {
  let { onHandleButtonCreateNewAccount } = props;
  let handleClick = () => {
    onHandleButtonCreateNewAccount();
  };
  return (
    <div>
      <Container>
        <br />
        <Button color="success" outline onClick={handleClick}>
          Create New Account
        </Button>
      </Container>
    </div>
  );
}

export default CreateButtonAccount;
