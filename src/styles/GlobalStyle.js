import { createGlobalStyle } from "styled-components";
import GmarketSansWOFFMedium from "../assets/GmarketSansMedium.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansWOFFMedium';
    src: local('GmarketSansWOFFMedium');
    font-style: normal;
    font-weight: normal;
    src: url(${GmarketSansWOFFMedium}) format('truetype');
  }
  * {
    box-sizing: border-box;
  }
  body {
    height: 100%;
    background-color: #fbfbfb;
    font-family: GmarketSansWOFFMedium, sans-serif;
    color: #000;
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
