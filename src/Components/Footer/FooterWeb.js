import React from "react";
import "./FooterWeb.css";
function FooterWeb(props) {
  return (
    <footer>
      <div class="container-fluid padding footer">
        <div class="row text-center">
          <div class="col-md-4">
            <br />
            <img src="./img/LOGO1.png" alt="" />
            <hr class="light" />
            <p>123-456-789</p>
            <p>smallhome@gmail.com</p>
            <p>Chợ Đồng Xuân, Hoàn Kiếm, Hà Nội</p>
          </div>
          <div class="col-md-4">
            <hr class="light" />
            <h5>Working hours</h5>
            <hr class="light" />
            <p>Monday-Friday: 8am - 5 pm</p>
            <p>Weekend: 8am - 12am</p>
          </div>
          <div class="col-md-4">
            <hr class="light" />
            <h5>Services</h5>
            <hr class="light" />
            <p>Bảo hành</p>
            <p>Sửa chữa</p>
            <p>Mua trả góp</p>
          </div>
          <div class="col-12">
            <hr class="light-100" />
            <h5>&copy; Lê Hữu Quyền</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterWeb;
