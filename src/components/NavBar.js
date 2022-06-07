import React from "react";
import { AiOutlineExport } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="TitleNavBar">Admin Dashboard</h1>
      </div>

      <div className="nav-right">
        <div className="username">
          <p>KhmerAdmin3</p>
          <b>
            <p>KhmerAdmin3@gmail.com</p>
          </b>
        </div>

        <div className="userprofile">
          <img
            src="https://mikatan.goodsmile.info/en/wp-content/uploads/2015/03/o0515051413240642754.jpg"
            alt="avatar"
            className="profile"
          />
        </div>

        <div className="user-setting">
          <a href="#">
            LOGOUT <AiOutlineExport className="icon"></AiOutlineExport>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
