import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        darkGray: '#696969',
        lightGray: '#E3E4E7',
        lightBlue: '#ADB9C3',
        darkBlue: '#3878A2',
        white: '#fff',
    },
    fontSizes: {
        smaller: '12px',
        small: '13px',
        regular: '14px',
        regularBig: '18px',
        bigger: '20px',
    },
    gutters: {
        smaller: '5px',
        small: '10px',
        regular: '15px',
        regularBig: '20px',
        big: '30px',
        large: '50px',
    },
    radius: {
        regular: '12px',
        small: '2px',
    },
    fontFamily: {
        main: '"Open Sans", sans-serif;',
    },
};

export const GlobalStyle = createGlobalStyle`
  html{ 
   overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    overflow-x: hidden;
    h1, h2, h3, h4, h5, h6{
        margin-bottom:0; 
    }
   
  }
  
`;
