import React from "react";
//import styled from 'styled-components'
import SearchBar from "../forms/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import sty from "./Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <nav className={sty.navBar}>
      <div className={sty.links}>
        <NavLink
          exact
          to="/"
          className={() => sty.textLink}
          activeClassName={sty.textLinkActive}
        >
          <span>Today's Weather</span>
        </NavLink>

        <NavLink
          exact
          to="/about"
          className={() => sty.textLink}
          activeClassName={sty.textLinkActive}
        >
          <span>About</span>
        </NavLink>
      </div>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
