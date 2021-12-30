import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { BsFillKeyFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
} from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";

function Header() {
  return (
    <div className="head">
      <nav className="nav">
        <p>
          <GiRotaryPhone className="phone" /> Call us:
          <a href="" id="phone" target="_blank">
            +358 10 524 5500
          </a>
        </p>
        <p>
          <a href="" className="keys" target="_blank">
            <BsFillKeyFill className="key" />
            Log to the customer support
          </a>{" "}
        </p>
        <p>
          {" "}
          <AiOutlineGlobal className="global" /> Follow us on :{" "}
          <a href="" className="face" target="_blank">
            <TiSocialFacebook className="fb" />{" "}
          </a>
          <a href="" className="twit" target="_blank">
            {" "}
            <TiSocialTwitter className="twitter" />
          </a>
          <a href="" className="lin" target="_blank">
            <TiSocialLinkedin className="linkedin" />
          </a>
          <a href="" className="inst" target="_blank">
            <IoLogoInstagram className="instagram" />
          </a>
        </p>
      </nav>
    </div>
  );
}

export default Header;
