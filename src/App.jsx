import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

//components
import Landing from "./pages/Landing.jsx";
import Main from "./pages/Main";

function App() {
  const [pinned, setPinned] = useState({
    defaultCity: {
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
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      wind: { speed: 1.58, deg: 329, gust: 1.95 },
    },
    pinnedCity: {},
  });
  const [cities, setCities] = useState([]);
  const [error, setError] = useState("");

  function onSearch(city) {
    axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"4ae2636d8dfbdc3044bede63951a019b"}&units=metric`
    )
      .then((result) => {
        let { id } = result.data;
        const exists = cities?.filter((c) => c.id === id)?.length > 0;

        if (!exists) {
          setCities((oldCities) => [...oldCities, result.data]);
          setError("");
        } else {
          setError(`City already exists`);
          setTimeout(() => {
            setError("");
          }, 3000);
        }
      })
      .catch((error) => {
        setError(error.response.statusText);
        setTimeout(() => {
          setError("");
        }, 3000);
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }

  useEffect(() => {
     navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;
        axios(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
        )
          .then(({ data }) => {
            setPinned({defaultCity:data});
          })
          .catch((err) => {
            alert(err.message);
          });
      },
      () => {
        alert("Ha sucedido un error");
      }
    );
  }, []);

  return (
    <div className="min-h-[100vh] bg-[#2a2335] text-white overflow-hidden sm:p-2">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/main"
          element={
            <Main
              cities={cities}
              onClose={onClose}
              onSearch={onSearch}
              noFound={{ error, setError }}
              pinnedValues={{ pinned, setPinned }}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
