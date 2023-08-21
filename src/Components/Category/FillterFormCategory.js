import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
function FillterFormCategory(props) {
  return (
    <div>
      <Container>
        <br />
        <h3>Fillter Account:</h3>
        <Form>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              {/* Tìm kiếm */}
              <FormGroup>
                <Label for="search">Search: </Label>
                <Input
                  id="search"
                  name="search"
                  placeholder="Input category name . . ."
                  type="search"
                  onChange={(event) => {}}
                />
              </FormGroup>
            </div>
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
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
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
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

export default FillterFormCategory;
