import styled from 'styled-components';

export const Container = styled.button`
display: block;
margin: 3rem auto;
margin-bottom: 1rem;
padding: 1.6rem 3rem;
font-size: 1.8rem;
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
transition: all 500ms ease-in-out;

 &:hover{
  background: transparent ;
  padding: 2rem 4rem;
  border: 0.1rem solid rgba(93, 12, 255, 1);
  color: rgba(93, 12, 255, 1);
  font-size: 1.9rem;
}
`;
