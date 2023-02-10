import React from "react";
import { icons } from "../../asset";

export default function Card({city,onClose,onPinned}) {
  return (
    <div className="bg-[#333441] w-[250px] h-[150px] p-5 relative rounded-lg mr-2 mb-2">
      <h3 className="font-semibold">{city.name}</h3>

      <div className="flex items-center justify-around">
        <img
          src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt=""
        />
        <p>
          <span className="font-semibold text-xl"> {city.main.temp} °</span> <br />
          {city.weather[0].main}
        </p>
      </div>

      <div className="flex absolute top-2 right-2 ">
        <button
        onClick={()=>{
          onPinned((previus)=>({...previus, pinnedCity:city}))
        }}>
          <icons.Pin.Normal className="w-6 h-6 fill-white hover:fill-slate-400" />
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            onClose(city.id);
          }}
        >
          <icons.X className="stroke-white w-6 h-6 hover:stroke-red-700" />
        </button>
      </div>
    </div>
  );
}
