// import P from 'prop-types';
import React, { useRef, useState } from 'react';
import * as Styled from './styles';

import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { ButtonRegister } from '../ButtonRegister';

export const Form = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const inputName = useRef();
  const inputPassword = useRef();

  const handleRegister = (e) => {
    e.preventDefault();
    setUser({
      name: inputName.current.value,
      password: inputPassword.current.value,
    });
  };

  console.log(user);

  return (
    <Styled.Container>
      <InputName inputName={inputName} />
      <InputPassword inputPassword={inputPassword} />
      <ButtonRegister onClick={() => handleRegister()}>
        Cadastrar
      </ButtonRegister>
      <p>{user.name}</p>
      <p>{user.password}</p>
    </Styled.Container>
  );
};

// Form.propTypes = {
//   children: P.node.isRequired,
// };
