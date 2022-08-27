import React from "react";
import styled from "styled-components";

const AboutPanel = styled.div`
    background-color: red;
`
export default function About(props) {
    return <AboutPanel>
        <h1>About</h1>
    </AboutPanel>
}