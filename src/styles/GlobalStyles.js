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
  font-size: 62.5%;
}

body {
    background: linear-gradient(
      90deg,
      rgba(48, 16, 255, 1) 0%,
      rgba(100, 115, 255, 1) 100%
    );
  }

input{
  padding: 2rem 3.2rem 2rem 1.6rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #5d0cff;
  outline: none;
  width: 40.0rem;
  background: transparent;
  color: #fff;
  font-size: 1.6rem;
}
`;
