import { createGlobalStyle } from "styled-components";
import GmarketSansWOFFMedium from "../assets/fonts/GmarketSansMedium.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansWOFFMedium';
    src: local('GmarketSansWOFFMedium');
    font-style: normal;
    font-weight: normal;
    src: url(${GmarketSansWOFFMedium}) format('truetype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    background-color: #EEE;
    font-family: GmarketSansWOFFMedium, sans-serif;
    color: #053B50;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export default GlobalStyle;
