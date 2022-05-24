import React, { useEffect, useRef, useState } from 'react';

import * as Styled from './styles';

import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { Button } from '../Button';

export const FormLogin = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });

  const [result, setResult] = useState(null);
  const [api, setApi] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ name: user.name, password: user.password }),
      };
      try {
        const response = await fetch('http://localhost:4000/login', options);
        const jsonResult = await response.json();

        setResult(jsonResult);
      } catch (e) {
        throw Error('Erro');
      }
    };

    if (api) fetchData();

    return () => setApi(false);
  }, [user, api]);

  const inputName = useRef();
  const inputPassword = useRef();

  const handleRegister = () => {
    setUser({
      name: inputName.current.value,
      password: inputPassword.current.value,
    });

    setApi(true);
  };

  console.log(result);

  return (
    <Styled.Container onClick={(e) => e.preventDefault()}>
      <h1>Login</h1>

      <InputName
        name="name"
        inputName={inputName}
        text="Digite seu nome de usuário"
      />
      <InputPassword
        name="password"
        inputPassword={inputPassword}
        text="Digite sua senha"
      />
      <Button handleRegister={() => handleRegister()}>Login</Button>
    </Styled.Container>
  );
};
