import styled from 'styled-components';

export const Container = styled.input`
  display: block;
  margin: 0 auto;
  padding: 2rem 3.2rem 2rem 1.6rem;
  border-radius: 0.5rem;
  border: 0.2rem solid #5d0cff;
  outline: none;
  width: 70%;
  background: transparent;
  color: #fff;
  font-size: 1.6rem;
  transition: all 300ms ease-in-out;

&:focus{
  border-color:rgba(48, 16, 255, 1);
}
`;
