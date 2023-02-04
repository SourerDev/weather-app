import React from "react";
import SearchBar from "../forms/SearchBar.jsx";
import { icons } from "../../asset/index.js";
import { NavLink } from "react-router-dom";
import sty from "./Nav.module.css";
import { saveInStorage } from "../../utils/index.js";

export default function Nav({ onSearch }) {
  return (
    <nav className="bg-[#333441] h-20 flex items-center rounded-lg shadow-2xl">
      <ul className="w-full flex list-none items-center justify-between">
        <NavLink
          exact
          to="/"
          onClick={() => {
            saveInStorage("firstTime", {}, true);
          }}
        >
          <li className="flex items-center space-x-3 px-3">
            <icons.Weather className="fill-white w-16 h-16" />
            <span className="text-2xl font-bold">Today's Weather</span>
          </li>
        </NavLink>
        <li className="px-3">
          <SearchBar onSearch={onSearch} />
        </li>
      </ul>
    </nav>
  );
}
