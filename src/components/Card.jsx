import React from 'react';
import styled from 'styled-components';

//Styles
const CardBody = styled.div`
    background-image: url('https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__340.jpg');
    background-size: cover;
    background-position: initial;
    background-repeat: no-repeat;
    background-color:rgba(0, 0, 0, 0.291);

    min-width: 320px;
    max-width: 321px;
    padding-top: .5rem;
    border-radius: .5rem;
    margin: 1.2rem;
    border: 1.25px solid black;
    `
    const CardHead = styled.div`
    height: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    & h3{
        padding: 0 0 0 1rem;
        font-size: 1.2rem;
    }
    & button{
        margin-right: .5rem;
        border: none;
        background-color:transparent;
        color: red;
        cursor: pointer;
        border-radius: 50%;
    }
    & button:hover{
        color: aliceblue;
    }   
`

const CardMain = styled.div`
    display: flex;
    & p{
        font-size:1rem;
        display: inline-block;
        flex: 1;
        padding: 10% 0 0 1rem;
        & span{
            font-size:2rem;
            padding: 0;
            margin: 0;
        }
    }
`

const CardFooter = styled.div`
    display: flex;
    font-size: 12px;
    background-color: rgba(87, 87, 172, 0.291);
    border-radius: .5rem;
    & div{
        flex: 1;
        padding: 0 0 0 1rem;
        margin: 0 rem;
    }
`

export default function Card(props) {
    return <CardBody>

        <CardHead>
            <h3>{props.name}</h3>
            <button onClick={
                (event)=>{
                    event.preventDefault();
                    props.onClose(props.id);
                    console.log(props.id);
                }
            }>X</button>
        </CardHead>

        <CardMain>
                <p><span> {props.temp} °</span> <br/>
                    {props.shortDesc}
                </p>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt=''/>
        </CardMain>

        <CardFooter>
            <div>
                <span>
                    Max: {props.max}<sup> °</sup>C<br/>
                    min: {props.min}<sup> °</sup>C
                </span>
            </div>
            <div>
                <span>
                    Wind: {props.wind} Km/h <br/>
                    Humidity: {props.humidity}%
                </span>
            </div>
        </CardFooter>

    </CardBody>   
}