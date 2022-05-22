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
    if (user.name != '' && user.password != '') {
      const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ name: user.name, password: user.password }),
      };

      fetch('http://localhost:4000/user/cadaster', options)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
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
