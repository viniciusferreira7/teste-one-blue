import React, { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';

import * as Styled from './styles';

import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { Button } from '../Button';
import { FlagSuccess } from '../FlagSuccess';
import { FlagError } from '../FlagError';

export const FormLogin = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [result, setResult] = useState(null);

  const inputName = useRef();
  const inputPassword = useRef();

  useEffect(() => {
    const validate = async (user) => {
      let schema = yup.object().shape({
        name: yup.string().required('Necessário preencher o campo de Usuário'),
        password: yup
          .string()
          .required('Necessário preencher o campo de Senha'),
      });

      try {
        await schema.validate(user);

        return true;
      } catch (err) {
        setStatus({
          type: 'error',
          message: err.errors,
        });
        return false;
      }
    };
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
        throw Error('Deu ruim!');
      }
    };

    if (validate(user)) fetchData();
  }, [user]);

  useEffect(() => {
    if (result !== null) {
      if (result.ok) {
        setStatus({
          type: 'success',
          message: `Seja muito bem-vindo(a) ${user.name}!`,
        });
      } else if (
        result.why === 'Not found data!' &&
        user.name !== '' &&
        user.password !== ''
      ) {
        setStatus({
          type: 'not exists',
          message: 'O usuário não existe',
        });
      }
    }
  }, [result, user]);

  const handleRegister = () => {
    setUser({
      name: inputName.current.value,
      password: inputPassword.current.value,
    });
  };

  return (
    <Styled.Container onClick={(e) => e.preventDefault()}>
      <h1>Entrar</h1>

      {status.type === 'success' && <FlagSuccess>{status.message}</FlagSuccess>}
      {status.type === 'not exists' && <FlagError>{status.message}</FlagError>}
      {status.type === 'error' && <FlagError>{status.message}</FlagError>}

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
      <Button handleRegister={() => handleRegister()}>Entrar</Button>
    </Styled.Container>
  );
};
