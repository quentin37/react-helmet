/* eslint-disable react/button-has-type */
import { useState } from "react";
import { Link } from "react-router-dom";

import "../css/Nav.css";

function Nav() {
  const [showlinks, setShowLinks] = useState(false);

  return (
    <nav className={`navbar ${showlinks ? "show_nav" : "hidden_nav"}`}>
      <div className="navbar_logo" />

      <ul className="navbar_links">
        <li className="navbar_item">
          <Link
            to="/"
            className="navbar_link"
            onClick={() => setShowLinks(!showlinks)}
          >
            Home
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/About_Me"
            className="navbar_link"
            onClick={() => setShowLinks(!showlinks)}
          >
            Description
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/Mes_projet"
            className="navbar_link"
            onClick={() => setShowLinks(!showlinks)}
          >
            Mes projets
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/Contact"
            className="navbar_link"
            onClick={() => setShowLinks(!showlinks)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        className="navbar_burger"
        onClick={() => setShowLinks(!showlinks)}
      >
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Nav;
