import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../imge/logo.png";
function Header() {
  return (
    <header className="header">
      <div className="DangNhap">
        <img src={Logo} alt="logo" />
        <button className="text_btn">
          <NavLink to="/" className="link_login">
            <strong>Sign In</strong>
          </NavLink>
        </button>
      </div>
    </header>
  );
}
export default Header;
