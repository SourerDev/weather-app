import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import { Link } from 'react-router-dom';
//Styles
const PanelCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction:row-reverse;
`

export default function Cards({cities,onClose}) {
    return <PanelCard>
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
    </PanelCard>
}