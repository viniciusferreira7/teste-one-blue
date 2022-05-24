import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
width: 52.0rem;
min-height: 50.0rem;
background: #161a2b;
text-align: center;
margin: 12.8rem auto;
border-radius: 1.0rem;
padding-bottom: 2.5rem;

> button{
    width: 8.0rem;
    cursor: pointer;
    margin:0 auto;
    padding: 0.6rem 0.2rem;
    color: #fff;
    border:0.2rem solid  transparent;
    border-radius: 0.6rem;
    border-color:rgba(93, 12, 255, 1);
    background-color: transparent;
    font-size:1.4rem;
  }

  button:active{
  background: rgba(93, 12, 255, 1) ;
  border:none;
  color: #fff;
}
`;
