import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
 margin:0;
 padding:0;
 box-sizing:border-box ;
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
}

html{
  height: 100%;
  font-size: 62.5%;
}

body {
    background: linear-gradient(
      90deg,
      rgba(48, 16, 255, 1) 0%,
      rgba(100, 115, 255, 1) 100%
    );
    padding: 0 1%;
  }
`;
