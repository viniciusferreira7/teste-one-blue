import React from 'react';

import { InputName } from '../../components/InputName';
import { InputPassword } from '../../components/InputPassword';
import { ButtonRegister } from './components/ButtonRegister';

export const Home = () => {
  return (
    <div>
      <InputName />
      <InputPassword />
      <ButtonRegister>Cadastrar</ButtonRegister>
    </div>
  );
};
