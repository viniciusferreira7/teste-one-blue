// import P from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
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

  const handleRegister = () => {
    setUser({
      name: inputName.current.value,
      password: inputPassword.current.value,
    });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Styled.Container onClick={(e) => e.preventDefault()}>
      <InputName inputName={inputName} />
      <InputPassword inputPassword={inputPassword} />
      <ButtonRegister handleRegister={() => handleRegister()}>
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
