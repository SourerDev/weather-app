import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

//components
import Landing from "./pages/Landing.jsx";
import Main from "./pages/Main";

function App() {
  const [defaultCity, setDefaultCity] = useState({
    base: "stations",
    clouds: { all: 98 },
    cod: 200,
    coord: { lon: -76.488, lat: 3.0073 },
    dt: 1675458177,
    id: 3668572,
    main: {
      feels_like: 28.5,
      grnd_level: 895,
      humidity: 55,
      pressure: 1008,
      sea_level: 1008,
      temp: 27.66,
      temp_max: 27.66,
      temp_min: 27.66,
    },
    name: "Santander de Quilichao",
    sys: {
      country: "CO",
      sunrise: 1675423190,
      sunset: 1675466377,
    },
    timezone: -18000,
    visibility: 10000,
    weather: [
      { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
    ],
    wind: { speed: 1.58, deg: 329, gust: 1.95 },
  });
  const [cities, setCities] = useState([]);

  function onSearch(city) {
    axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"4ae2636d8dfbdc3044bede63951a019b"}&units=metric`
    )
      .then((result) => {
        let info = result.data;
        if (info) {
          setCities((oldCities) => [...oldCities, info]);
        } else {
          alert(`City (${city}). no found`);
        }
      })
      .catch((error) => {
        console.log(error.response.statusText);
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }

  function cityFilter(cityId) {
    let city = cities.filter((c) => c.id === parseInt(cityId));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  useEffect(() => {
    /* navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        axios(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
        )
          .then(({ data }) => {
            setDefaultCity(data);
            console.log(data);
          })
          .catch((err) => {
            alert(err.message);
          });
      },
      () => {
        alert("Ha sucedido un error");
      }
    ); */
  }, []);
  return (
    <div className="h-[100vh] bg-[#2a2335] p-4 text-white">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/main"
          element={
            <Main
              cities={cities}
              onClose={onClose}
              onSearch={onSearch}
              defaultCity={{ defaultCity, setDefaultCity }}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
