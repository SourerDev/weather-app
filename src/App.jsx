import React, { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

//components
import Landing from "./pages/Landing.jsx";
import Main from "./pages/Main";
import DetailCity from "./pages/DetailCity";

function App() {
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
  return (
    <div className="h-[100vh] bg-slate-500">
      <Route exact path="/" render={() => <Landing />} />
      <Route
        path="/main"
        render={() => (
          <Main cities={cities} onClose={onClose} onSearch={onSearch} />
        )}
      />
      <Route
        path="/city/:id"
        render={({ match }) => (
          <DetailCity cityF={cityFilter(match.params.cityId)} />
        )}
      />
    </div>
  );
}

export default App;
