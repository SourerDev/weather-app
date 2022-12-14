import React from "react";
import styled from "styled-components";

const CityPanel = styled.div`
    background-color:trasparent;
`

export default function Ciudad({cityF}) {
    return <CityPanel>
        <h1>{cityF.name}</h1>
        <div>
            <p>
                { cityF.main.temp} °
            </p>
            <p>
                {cityF.weather[0].description}
            </p>
            <p>
                {cityF.main.humidity} %
            </p>
        </div>
    </CityPanel>
}