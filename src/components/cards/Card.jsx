import React from "react";
import { icons } from "../../asset";

export default function Card({city,onClose,onPinned}) {
  return (
    <div className="bg-[#333441] w-[350px]  p-5 relative rounded-lg sm:mr-2 sm:mb-2 sm:w-[250px] sm:h-[150px]">
      <h3 className="font-semibold">{city.name}</h3>

      <div className="sm:flex items-center justify-around">
        <img
        className="hidden sm:flex"
          src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt=""
        />
        <p className="ml-4 sm:ml-0">
          <span className="font-semibold text-x mr-2 sm:mr-0"> {city.main.temp} °</span> <br className="hidden sm:block" />
          {city.weather[0].main}
        </p>
      </div>

      <div className="flex flex-col-reverse absolute right-2 top-1 sm:top-2 sm:right-2 sm:flex-row">
        <button
        onClick={()=>{
          onPinned((previus)=>({...previus, pinnedCity:city}))
        }}>
          <icons.Pin.Normal className="w-9 h-9 fill-white hover:fill-slate-400 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            onClose(city.id);
          }}
        >
          <icons.X className="stroke-white w-9 h-9 hover:stroke-red-700 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
}
