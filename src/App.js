import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route} from 'react-router-dom';

import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About'
import City from './components/City'

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(city) {  
      axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'4ae2636d8dfbdc3044bede63951a019b'}&units=metric`).then(
        (result) => {
          let info = result.data;
          if (info) {
            setCities(oldCities => [...oldCities,info])
          } else {
            alert(`City (${city}). no found`)
          }
        }
      ).catch(
        (error) => {console.log(error.response.statusText)}
      )
    }

    function onClose(id) {
      setCities(oldCities=>oldCities.filter(city=>city.id !== id))
    }
    function cityFilter(cityId) {
      let city = cities.filter((c)=> c.id === parseInt(cityId))
      if (city.length > 0){  
        return city[0]
      }else {return null}
    }
  return (
    <div className="App">

      {/* <header className="App-header">
        <Nav onSearch = {onSearch}/>
        </header>
        
        <main className="App-main">
        <Cards cities={cities} 
        onClose={onClose}
        />
        </main>
        
        <footer className='App-footer'>
        By Jhonier Alegria
      </footer> */}
      <Route path={'/'} render={()=><header className="App-header">
        <h1>Weather App</h1>
        <Nav onSearch={onSearch}/>
        </header>}
      />
      <Route exact path={'/'} render={()=><Cards cities={cities} onClose={onClose}/>}/>
      <Route path={'/about'} render={()=><About/>}/>
      <Route path={'/city/:cityId'} render={({match})=><City cityF={cityFilter(match.params.cityId)}/>}/>

    </div>
  );
}

export default App;
