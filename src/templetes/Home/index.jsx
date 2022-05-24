import React from 'react';
import * as Styled from './styles';

import { Form } from '../../components/Form';

export const Home = () => {
  return (
    <Styled.Container>
      <Form buttonText={'Cadastrar'} title={'Cadastrar Usuário'} />
      <Form buttonText={'Entrar'} />
    </Styled.Container>
  );
};
