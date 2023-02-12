import { icons } from "../../asset";

export default function DefaultCity({
  defaultCity,
  pinnedCity,
  onClose,
  onPinned,
}) {
  const city = pinnedCity?.id ? pinnedCity : defaultCity;
  return (
    <div className="bg-[#333441] w-[350px] h-[530px] rounded-xl shadow-xl sm:h-[500px]">
      <div className="flex justify-between items-center m-2">
        <h1
          className="min-w-[50%] text-xl ml-4 mr-4 mt-4 font-extrabold relative"
          title={city.name.length > 22 && city.name}
        >
          {city.name.length > 22 ? city.name.slice(0, 19) + "..." : city.name} '
          {city.sys.country}'{" "}
          <span className="text-base font-normal absolute top-3/4 left-0">
            {city.weather[0].description}
          </span>
        </h1>

        {pinnedCity?.id && (
          <div className="bg-gray-200 h-8 rounded-lg hover:bg-[#2a2e35] group/hv sm:relative sm:w-1 z-20">
            <div className="bg-[#333441] w-20 -top-2 left-full rounded-r-lg text-center p-1 sm:group-hover/hv:block sm:absolute sm:hidden">
              <button
                onClick={() => {
                  onPinned((previus) => ({ ...previus, pinnedCity: {} }));
                }}
              >
                <icons.Pin.Border className="fill-white w-8 h-8 inline-block hover:fill-slate-500" />
              </button>
              <button
                onClick={() => {
                  onClose(city.id);
                  onPinned((previus) => ({ ...previus, pinnedCity: {} }));
                }}
              >
                <icons.X className="stroke-white w-8 h-8 inline-block hover:stroke-red-700" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="h-[70%] flex flex-col items-center justify-center mx-2 sm:h-[68%]">
        <div className="w-[120px] h-[120px]">
          <img
            className="w-full h-full"
            src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
        <p className="font-bold flex items-start space-x-1">
          <span className="text-4xl">{city.main.temp}</span>
          <span className="text-xl">°c</span>
        </p>
        <span className="font-semibold">{city.weather[0].main}</span>
      </div>
      <div className="h-[14%] m-2 flex flex-wrap p-2 items-center">
        <span className="w-1/2 font-bold pl-2">
          Temp Max: {city.main.temp_max}°
        </span>
        <span className="w-1/2 font-bold pl-2">
          Temp Min: {city.main.temp_min}°
        </span>
        <span className="w-1/2 font-bold pl-2">
          Humidity: {city.main.humidity}%
        </span>
        <span className="w-1/2 font-bold pl-2">Wind: {city.wind.speed}</span>
      </div>
    </div>
  );
}
