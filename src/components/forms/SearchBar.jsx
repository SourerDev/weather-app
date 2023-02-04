import React, { useState } from "react";
import { icons } from "../../asset";

export default function SearchBar({ onSearch }) {
  // code
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <form className="h-8 w-[300px] relative">
      <input
        className="w-full h-full outline-none text-gray-700 px-3 rounded "
        id="searched"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="h-full w-7 absolute top-0 right-0 flex items-center justify-center"
        onClick={(event) => {
          event.preventDefault();
          onSearch(city);
          document.getElementById("searched").value = "";
        }}
      >
        <icons.Searched className="w-6 h-6 fill-[#2a2e35] hover:fill-emerald-100" />
      </button>
    </form>
  );
}
