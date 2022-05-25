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
          <button onClick={() => setLogin((s) => !s)}>Entrar</button>
        </>
      )}
      {login && (
        <>
          <FormLogin />
          <button onClick={() => setLogin((s) => !s)}>Cadastrar</button>
        </>
      )}
    </Styled.Container>
  );
};
