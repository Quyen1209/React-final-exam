import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function ProductsPaginations(props) {
  return (
    <div>
      <div class="row" style={{ textAlign: "center" }}>
        <Pagination aria-label="Page navigation example" size="sm">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" previous />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" last />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
}

export default ProductsPaginations;
