import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  *{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #f9fcfd;
    background-color: #DBCBBD;
    color: #323232;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    }

  h1,h2,h3,h4,h5,h6,ul, li {
      margin: 0;
      padding: 0;
    }
  `;

export const Container = styled.div`
  /* border: 1px solid red;
  max-width: 1280px;
  margin: 0 auto; */
`;