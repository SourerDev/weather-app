import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding:.5rem 1rem;
    color: #f8f9fa;
        & span{
            font-size: 1.25rem;
        }
`

export default function Nav({onSearch}) {
    return <NavBar>
        <Link to="/">
            <span>Today's Weather</span>
        </Link>
        <Link to='/about'>
            <span>About</span>
        </Link>
        <SearchBar onSearch={onSearch} />
    </NavBar>
}