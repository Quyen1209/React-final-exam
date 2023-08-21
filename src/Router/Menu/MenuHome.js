import React from "react";
import "./MenuHome.css";
function MenuHome(props) {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              SMALL HOME
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse flex-row-reverse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="#" data-text="Home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" data-text="About">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" data-text="Assignment">
                    Management
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" data-text="Buy">
                    Buy
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" data-text="Service">
                    Service
                  </a>
                </li>
              </ul>
            </div>

            <form class="d-flex">
              <button class="btn btn-success" type="submit">
                Login
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <button class="btn btn-success" type="submit">
                Sign up
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MenuHome;
