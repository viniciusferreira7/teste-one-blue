import React, { useState } from 'react';
import * as Styled from './styles';

import { FormLogin } from '../../components/FormLogin';
import { FormRegister } from '../../components/FormRegister';

export const Home = () => {
  const [login, setLogin] = useState(false);
  return (
    <Styled.Container>
      {!login && (
        <>
          <FormRegister />
          <button onClick={() => setLogin(true)}>Entrar</button>
        </>
      )}
      {login && (
        <>
          <FormLogin />
          <button onClick={() => setLogin(false)}>Cadastrar</button>
        </>
      )}
    </Styled.Container>
  );
};
