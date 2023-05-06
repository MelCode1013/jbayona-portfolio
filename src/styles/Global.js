import styled from "styled-components";

const Header = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
  background-color: black;
  margin: 0 1em;
  padding: 1em 1em;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  }
  @keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
  } 
`;

const Body = styled.body`
  background-color: black;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

export {Header, Body};
