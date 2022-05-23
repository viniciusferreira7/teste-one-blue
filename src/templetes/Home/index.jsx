import React from 'react';
import * as Styled from './styles';

import { Form } from '../../components/Form';

export const Home = () => {
  return (
    <Styled.Container>
      <Form
        url={'http://localhost:4000/user/cadaster'}
        buttonText={'Cadastrar'}
        title={'Cadastrar Usuário'}
      />
      <Form url={'http://localhost:4000/login'} buttonText={'Entrar'} />
    </Styled.Container>
  );
};
