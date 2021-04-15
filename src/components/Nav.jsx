import React from "react";
import { NavLink, Link} from "react-router-dom";
import "./css/Nav.css";

const Nav = () => (
  <div className="navBar">
    <div className="logo">
      <Link to="/">LOGO</Link>
    </div>
    <ul>
      <NavLink exact to="/" activeClassName="active">
        <li>
          <div className="menuAnime"></div>Home
        </li>
      </NavLink>
      <NavLink to="/gallery" activeClassName="active">
        <li>
          <div className="menuAnime"></div>Gallery
        </li>
      </NavLink>
      <NavLink to="/service" activeClassName="active">
        <li>
          <div className="menuAnime"></div>Service
        </li>
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        <li>
          <div className="menuAnime"></div>Contact
        </li>
      </NavLink>
    </ul>
  </div>
);

export default Nav;
