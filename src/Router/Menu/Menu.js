import React from "react";
import { NavLink } from "react-router-dom";

function Menu(props) {
  return (
    <div>
      <div className="row">
        <nav
          className="navbar navbar-inverse "
          style={{ backgroundColor: "black", color: "white" }}
        >
          <div className="container-fluid">
            <ul class="nav navbar-nav">
              <li>
                <NavLink to="/category" data-text="Category">
                  Category
                </NavLink>
              </li>

              <li>
                <NavLink to="/products" data-text="Products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="account" data-text="Account">
                  Account
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
