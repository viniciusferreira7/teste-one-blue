import React from 'react';

import { Form } from '../../components/Form';

export const Home = () => {
  return (
    <div>
      <Form
        url={'http://localhost:4000/user/cadaster'}
        buttonText={'Cadastrar'}
        input={true}
        title={'Cadastrar Usuário'}
      />
      <Form url={'http://localhost:4000/login'} buttonText={'Entrar'} />
    </div>
  );
};
