import styled from "styled-components";

const HeaderStyle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  margin: 0 1em;
  padding: 1em 1em;
  font-size: 40px;
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

const BodyStyle = styled.body`
  background-color: black;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const SubheaderStyle = styled.a`
  text-decoration: none;
  color: white;
  font-size: 16px;
  display: flex;
  padding: 1.5em 0;
  &:hover {
    text-decoration: underline;
  }
`;

const GalleryStyle = styled.h2`
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: white;
`;

export { HeaderStyle, BodyStyle, SubheaderStyle, GalleryStyle };
