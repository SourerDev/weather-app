import Nav from "../components/navs/Nav";
import Card from "../components/cards/Card";
import { Link } from "react-router-dom";
import DefaultCity from "../components/cards/DefaulCity";

const Main = ({ cities, onClose, onSearch, defaultCity }) => {
  return (
    <div className=" h-full">
      <Nav onSearch={onSearch} />
      <div className="h-[87%] w-full flex  my-2" id="container">
        <div className="h-full w-[40%] flex items-center justify-center">
          <DefaultCity city={defaultCity.defaultCity} />
        </div>
        <div className="h-full w-[60%] flex flex-wrap start py-4 overflow-y-scroll">
          {cities && Array.isArray(cities) ? (
            cities.map((city) => (
              <Card
                key={city.id}
                id={city.id}
                temp={city.main.temp}
                max={city.main.temp_max}
                min={city.main.temp_min}
                name={city.name}
                shortDesc={city.weather[0].main}
                wind={city.wind.speed}
                humidity={city.main.humidity}
                img={city.weather[0].icon}
                onClose={onClose}
              />
            ))
          ) : (
            <h2>No se encontraron ciudades</h2>
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;
