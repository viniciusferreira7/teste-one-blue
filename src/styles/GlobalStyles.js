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
  padding: 1.4rem 3.2rem 1.4rem 1.6rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #5d0cff;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;
}

input::placeholder {
    color: #e2e2e2;
  }`;
