import { Popover, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { icons } from "../../asset";

export default function SearchBar({ onSearch, noFound }) {
  // code
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <>
      <Popover className="sm:hidden">
        <Popover.Button className="flex items-center justify-center rounded-full w-10 h-10 outline-none">
          <icons.Searched className="fill-white" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="bg-[#2a2335]/50 w-full flex flex-col items-center fixed inset-x-0 top-0 origin-top-right px-2 pb-4 transform transition backdrop-blur-sm z-50"
          >
            <Popover.Button className="w-10 h-10 outline-none self-end my-2">
              <icons.X className="stroke-white"/>
            </Popover.Button>
            <form className="h-12 w-full relative">
              <input
                className="w-full h-full outline-none text-gray-700 px-3 rounded text-lg"
                id="searched"
                type="text"
                placeholder="Search"
                onChange={handleChange}
              />
              <button
                className="h-full w-12 absolute top-0 right-1 flex items-center justify-center"
                onClick={(event) => {
                  event.preventDefault();
                  onSearch(city);
                  document.getElementById("searched").value = "";
                }}
              >
                <icons.Searched className="w-8 h-8 fill-[#2a2e35] hover:fill-emerald-100" />
              </button>
              {noFound.error && (
                <div className="absolute w-full left-0 top-[110%] bg-[#ffffff] text-center font-medium text-gray-400 rounded-md shadow">
                  {noFound.error}
                </div>
              )}
            </form>
          </Popover.Panel>
        </Transition>
      </Popover>

      <form className="hidden h-8 w-[300px] relative sm:block">
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
        {noFound.error && (
          <div className="absolute w-full left-0 top-[110%] bg-[#ffffff] text-center font-medium text-gray-400 rounded-md shadow">
            {noFound.error}
          </div>
        )}
      </form>
    </>
  );
}
