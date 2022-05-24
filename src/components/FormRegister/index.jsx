import React, { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';

import * as Styled from './styles';
// import { useFetch } from './useFetch';

import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { Button } from '../Button';
import { FlagSuccess } from '../FlagSuccess';
import { FlagError } from '../FlagError';

export const FormRegister = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [result, setResult] = useState(null);

  useEffect(() => {
    const validate = async (user) => {
      let schema = yup.object().shape({
        name: yup
          .string()
          .required('Necessário preencher o campo de Usuário')
          .matches(
            /^.*(?=.{4,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Campo de usuário deve conter 4 caracteres, sendo uma maiúsculo e um minúsculo',
          ),
        password: yup
          .string()
          .required('Necessário preencher o campo de senha')
          .matches(
            /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'A senha deve conter pelo menos 6 caracteres, uma maiúscula, um número e um caractere especial',
          ),
      });

      try {
        await schema.validate(user);

        return true;
      } catch (err) {
        setStatus({
          type: 'error',
          message: err.errors,
        });
        console.log(err.errors);
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
        const response = await fetch(
          'http://localhost:4000/user/cadaster',
          options,
        );
        const jsonResult = await response.json();

        setResult(jsonResult);
      } catch (e) {
        throw Error('Erro');
      }
    };

    if (validate(user)) fetchData();
  }, [user]);

  useEffect(() => {
    if (result !== null) {
      if (result.ok && user.name.length >= 4 && user.password.length >= 6) {
        setStatus({
          type: 'success',
          message: 'Usuário cadastrado com sucesso!',
        });
      } else if (result.why === 'User already exists') {
        setStatus({
          type: 'exists',
          message: 'O usuário já existe!',
        });
      }
    }
  }, [result, user]);

  const inputName = useRef();
  const inputPassword = useRef();

  const handleRegister = () => {
    setUser({
      name: inputName.current.value,
      password: inputPassword.current.value,
    });
  };

  console.log(result);

  return (
    <Styled.Container onClick={(e) => e.preventDefault()}>
      <h1>Cadastre-se</h1>
      {status.type === 'success' && <FlagSuccess>{status.message}</FlagSuccess>}
      {status.type === 'exists' && <FlagError>{status.message}</FlagError>}
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
      <Button handleRegister={() => handleRegister()}>Cadastrar</Button>
    </Styled.Container>
  );
};
