import styled from 'styled-components';

export const Container = styled.button`
display: block;
margin: 3rem auto;
padding: 1.6rem;
border: none;
border-radius:0.6rem;
cursor: pointer;
outline: none;
background: linear-gradient(
  90deg,
  rgba(93, 12, 255, 1) 0%,
  rgba(155, 0, 250, 1) 100%
);
color: #fff;
text-transform: capitalize;


&:active{
  background-color: red;
}
`;
