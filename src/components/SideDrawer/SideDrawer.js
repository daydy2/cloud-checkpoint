import React from "react";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
        <li>
          <a href="/">API</a>
        </li>
        <li>
          <a href="/">Premium</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
