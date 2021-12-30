import React from "react";
import logos from "./Images/logos.PNG";

function Footer() {
  return (
    <div id="main">
      <div className="foot">
        <p>
          <img src={logos} alt="" class="Image2" />
        </p>
      </div>
      <div className="col">
        <ul>
          {" "}
          <h4>GET TO KNOW US</h4>
        </ul>

        <a href="">
          {" "}
          <li>COMPANY </li>
        </a>
        <a href="">
          {" "}
          <li>CONTACT</li> <li></li>
        </a>
      </div>

      <div className="col">
        <ul className="list-unstyled">
          {" "}
          <h4>READ MORE</h4>
        </ul>
        <a href="">
          {" "}
          <li>SOLUTIONS</li>{" "}
        </a>
        <a href="">
          <li>INDUSTRIES</li>{" "}
        </a>
        <a href="">
          <li> PRIVACY POLICY</li>{" "}
        </a>
      </div>

      <div className="col">
        <ul className="list-unstyled">
          <h4>CAN WE HELP YOU?</h4>
        </ul>
        <li> Give us a call (+358 10 524</li>
        <li>5500) or send us a message</li>
        <li>mediconsult (at) mediconsult.fi</li>
      </div>
    </div>
  );
}

export default Footer;
