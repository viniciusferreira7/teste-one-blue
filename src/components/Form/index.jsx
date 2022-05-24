import P from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';

import * as Styled from './styles';
// import { useFetch } from './useFetch';

import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { Button } from '../Button';
import { FlagSuccess } from '../FlagSuccess';
import { FlagError } from '../FlagError';

export const Form = ({ buttonText, title }) => {
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
          .string('Necessário preencher o campo de Usuário')
          .required('Necessário preencher o campo de Usuário'),
        password: yup
          .string('Necessário preencher o campo de Senha')
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

  const inputName = useRef();
  const inputPassword = useRef();

  const handleRegister = () => {
    setUser({
      name: inputName.current.value,
      password: inputPassword.current.value,
    });

    if (result.ok) {
      setStatus({
        type: 'success',
        message: 'Usuário cadastrado com sucesso!',
      });
    } else if (result.why === 'User already exists') {
      setStatus({
        type: 'exists',
        message: 'O usuário já existe!',
      });
    } else if (result.why === 'Not found data!') {
      setStatus({
        type: 'exists',
        message: 'Campo vazio!',
      });
    }
  };

  console.log(result, 'o');
  console.log(user, 'user');
  console.log(status, 'sta ');

  return (
    <Styled.Container onClick={(e) => e.preventDefault()}>
      <h1>{title}</h1>
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
      <Button handleRegister={() => handleRegister()}>{buttonText}</Button>
    </Styled.Container>
  );
};

Form.propTypes = {
  buttonText: P.string.isRequired,
  title: P.string,
};
