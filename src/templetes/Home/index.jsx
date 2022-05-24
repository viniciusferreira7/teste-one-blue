import React from 'react';
import * as Styled from './styles';

// import { FormLogin } from '../../components/FormLogin';
import { FormRegister } from '../../components/FormRegister';

export const Home = () => {
  return (
    <Styled.Container>
      <FormRegister />
      <button>Login</button>
    </Styled.Container>
  );
};
