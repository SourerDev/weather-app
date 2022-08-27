import React,{useState} from 'react';
import styled from 'styled-components'; //npm install --save styled-components

//Styles

const FormSearch = styled.form`
    display: flex;
        & input{
            border: 1px solid #ced4da;
            width: auto;
            margin-right: .5rem;
            border-radius: .2rem;
            background-color: aliceblue;
        }
        & button{
            width: 4rem;
            text-align: center;
            border-radius: .2rem;
            color: rgba(32,80,192,1);
            background-color: transparent;
            cursor: pointer;
            border: 1.25px solid rgb(32,80,192)
        }
        & button:hover{
            background-color: rgba(32,80,192,0.5);
            border: 1.25px solid transparent;
            color: aliceblue;
        }

`
export default function SearchBar({onSearch}) {
    // code
    const [city,setCity] = useState('');

    function handleChange(event) {
        setCity(event.target.value);
        console.log(event.target.value);
    }

    return <FormSearch>
            <input
                id='searched'
                type="text" 
                placeholder="Search City"
                onChange={handleChange} 
            />
            <button 
                onClick={(event)=>{
                    event.preventDefault();
                    onSearch(city)
                    document.getElementById('searched').value='';
                }}
            >Add</button>
        </FormSearch>
    
}