import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
max-width:52.6rem;
width:90%;
height: 40%;
max-height: 80rem;
background: #161a2b;
text-align: center;
margin: 12.8rem auto;
margin-top: 8rem;
border-radius: 1.0rem;
padding:0 2% 2.5rem 2%;

> button{
    min-width: 8.0rem;
    cursor: pointer;
    margin:0 auto;
    padding: 0.6rem 0.2rem;
    color: rgba(93, 12, 255, 1);
    border:0.2rem solid  transparent;
    border-radius: 0.6rem;
    border-color:rgba(93, 12, 255, 1);
    background-color: transparent;
    font-size:1.4rem;
    transition: all 300ms ease-in-out;
  }

> button:hover{
  background: rgba(93, 12, 255, 1) ;
  color: #fff;
  padding: 0.8rem 0.4rem;
}
`;
