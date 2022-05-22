// import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { ButtonRegister } from '../ButtonRegister';

export const Form = () => {
  return (
    <Styled.Container method="post">
      <InputName />
      <InputPassword />
      <ButtonRegister>Cadastrar</ButtonRegister>
    </Styled.Container>
  );
};

// Form.propTypes = {
//   children: P.node.isRequired,
// };
