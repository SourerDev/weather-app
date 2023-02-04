import React from "react";
import { icons } from "../../asset";

export default function Card(props) {
  return (
    <div className="bg-[#333441] w-[250px] h-[150px] p-5 relative rounded-lg mr-2 mb-2">
      <h3 className="font-semibold">{props.name}</h3>

      <div className="flex items-center justify-around">
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt=""
        />
        <p>
          <span className="font-semibold text-xl"> {props.temp} °</span> <br />
          {props.shortDesc}
        </p>
      </div>

      <div className="flex absolute top-2 right-2 ">
          <icons.Pin.Normal className="w-6 h-6 fill-white" />
          <button
            onClick={(event) => {
              event.preventDefault();
              props.onClose(props.id);
              console.log(props.id);
            }}
          >
            <icons.X className="stroke-white w-6 h-6 hover:stroke-red-700" />
          </button>
        </div>
    </div>
  );
}
