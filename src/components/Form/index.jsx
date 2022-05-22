// import P from 'prop-types';
import React, { useRef, useState } from 'react';
import * as Styled from './styles';

import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { ButtonRegister } from '../ButtonRegister';
import { useFetch } from './useFetch';

export const Form = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });

  const [result] = useFetch(
    'http://localhost:4000/user/cadaster',
    user.name,
    user.password,
  );

  console.log(result);

  const inputName = useRef();
  const inputPassword = useRef();

  const handleRegister = () => {
    setUser({
      name: inputName.current.value,
      password: inputPassword.current.value,
    });
  };

  return (
    <Styled.Container onClick={(e) => e.preventDefault()}>
      <InputName inputName={inputName} />
      <InputPassword inputPassword={inputPassword} />
      <ButtonRegister handleRegister={() => handleRegister()}>
        Cadastrar
      </ButtonRegister>
    </Styled.Container>
  );
};

// Form.propTypes = {
//   children: P.node.isRequired,
// };
