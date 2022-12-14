import Nav from "../components/navs/Nav";
import Card from "../components/cards/Card";
import { Link } from "react-router-dom";

const Main = ({cities,onClose,onSearch})=>{
    return(<div>
        <Nav onSearch={onSearch}/>
        <div>
        {cities && Array.isArray(cities) ? cities.map((city)=><Link to={`/city/${city.id}`}><Card
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
      /></Link>
    ):<h2>No se encontraron ciudades</h2>}
        </div>
    </div>)
}
export default Main;