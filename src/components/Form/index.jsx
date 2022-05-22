import P from 'prop-types';
import React, { useRef, useState } from 'react';
import * as yup from 'yup';

import * as Styled from './styles';
import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { Button } from '../Button';
import { useFetch } from './useFetch';

export const Form = ({ url, buttonText, input = false }) => {
  const [user, setUser] = useState({
    name: null,
    userName: null,
    password: null,
  });
  const inputName = useRef();
  const inputPassword = useRef();

  const [result, exists] = useFetch(
    url,
    !!user.name && user.userName,
    !!user.password && user.password,
  );

  console.log(result);

  if (!validate()) return;

  const handleRegister = () => {
    setUser({
      name: inputName.current.value,
      password: inputPassword.current.value,
    });
  };

  const validate = async () => {
    let schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email(),
    });
  };

  return (
    <Styled.Container onClick={(e) => e.preventDefault()}>
      {input && <InputName name={'name'} text="Digite seu nome completo" />}
      <InputName
        name={'userName'}
        inputName={inputName}
        text="Digite seu nome de usuário"
      />
      <InputPassword
        name={'password'}
        inputPassword={inputPassword}
        text="Digite sua senha"
      />
      <Button handleRegister={() => handleRegister()}>{buttonText}</Button>
      {exists && <p>Já está em uso</p>}
    </Styled.Container>
  );
};

Form.propTypes = {
  url: P.string.isRequired,
  buttonText: P.string.isRequired,
  input: P.bool,
};
