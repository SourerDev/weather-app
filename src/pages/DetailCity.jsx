import styled from "styled-components";

const CityPanel = styled.div`
    background-color:trasparent;
`

const DetailCity = ({cityF})=>{
    return (<CityPanel>
        <h1>{cityF?.name}</h1>
        <div>
            <p>
                { cityF?.main.temp} °
            </p>
            <p>
                {cityF?.weather[0].description}
            </p>
            <p>
                {cityF?.main.humidity} %
            </p>
        </div>
    </CityPanel>)
}

export default DetailCity;