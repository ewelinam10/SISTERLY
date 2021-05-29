import React from "react";
import styled, { keyframes } from 'styled-components'
import { Button } from 'react-bootstrap';
const fadeIn = keyframes`
  0% {
    opacity: 20%;
  }
  100% {
    opacity: 1;
  }
`
const color = '#FF5E78'; // nie wiem jak zaimportowac ze styli base-pink

const StyledButton = styled(Button)`
animation: 3s ${fadeIn} ease-out;
text-align: center;
text-decoration: none;
background-color: ${color};
border: 2px solid $color;
display: inline-block;
border-radius: 0.3em;
border-color: black;
transition: all 0.2s ease-in-out;
position: relative;
overflow: hidden;
&:before {
  content: "";
  background-color: rgba(255,255,255,0.5);
  height: 100%;
  width: 3em;
  display: block;
  position: absolute;
  top: 0;
  left: -4.5em;
  transform: skewX(-45deg) translateX(0);
  transition: none;
}
&:hover {
  background-color: $color !important;
  color: #fff;
  border-bottom: 4px solid darken($color, 10%);
  &:before {
    transform: skewX(-45deg) translateX(13.5em);
   transition: all 0.5s ease-in-out;
  }
}
`;

export default StyledButton;