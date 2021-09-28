import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  *{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #DBCBBD;
    color: #323232;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    }

  h1,h2,h3,h4,h5,h6,p,ul,li {
      margin: 0;
      padding: 0;
    }
  `;
