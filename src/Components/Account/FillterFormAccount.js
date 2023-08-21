import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function FillterFormAccount(props) {
  return (
    <div>
      <Container>
        <br />
        <h3>Fillter Account:</h3>
        <Form>
          <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              {/* Tìm kiếm */}
              <FormGroup>
                <Label for="search">Search: </Label>
                <Input
                  id="search"
                  name="search"
                  placeholder="Input username, full name . . ."
                  type="search"
                  onChange={(event) => {}}
                />
              </FormGroup>
            </div>
            {/* Rolo */}
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <FormGroup>
                <Label for="role-fillter">Role: </Label>
                <Input
                  id="role-fillter"
                  name="role-fillter"
                  type="select"
                  onChange={(event) => {}}
                >
                  <option value={""}>Tất cả</option>
                  <option value={"ADMIN"}>Admin</option>
                  <option value={"MANAGER"}>Manager</option>
                  <option value={"EMPLOYEE"}>Employee</option>
                </Input>
              </FormGroup>
            </div>
            {/* MIN ID */}
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <FormGroup>
                <Label for="min-id">MIN ID: </Label>
                <Input
                  id="min-id"
                  name="min-id"
                  placeholder="Min id"
                  type="number"
                  step={"1"}
                  onChange={(event) => {}}
                />
              </FormGroup>
            </div>
            {/* MAX ID */}
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <FormGroup>
                <Label for="max-id">MAX ID: </Label>
                <Input
                  id="max-id"
                  name="max-id"
                  placeholder="Max id"
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

export default FillterFormAccount;
