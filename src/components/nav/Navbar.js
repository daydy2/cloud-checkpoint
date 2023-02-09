import React from "react";
import Scribble from "../images/scribblemaps-removebg-preview.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav--navlist">
        <li className="nav--navlist-items">
          <img src={Scribble} alt="Scribble logo" />
        </li>

        <li className="nav--navlist-items marg--p">
          <a href="#">Blog</a>
        </li>
        <li className="nav--navlist-items marg--p">
          <a href="#">Contact us</a>
        </li>
        <li className="nav--navlist-items marg--p">
          <a href="#">API</a>
        </li>
        <li className="nav--navlist-items marg--p">
          <a href="#">Premium</a>
        </li>
        <li className="nav--navlist-items marg--p">
          <div className="navlist--login">Login</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
