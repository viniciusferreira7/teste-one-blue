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

export const Form = ({ url, buttonText, title }) => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [send, setSend] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ name: user.name, password: user.password }),
      };
      try {
        const response = await fetch(url, options);
        const jsonResult = await response.json();

        setResult(jsonResult);
      } catch (e) {
        throw Error('Erro');
      }
    };

    if (send) fetchData();

    return () => setSend(false);
  }, [user, send, url]);
  const inputName = useRef();
  const inputPassword = useRef();

  console.log(send);
  console.log(result);

  const handleRegister = () => {
    setUser({
      name: inputName.current.value,
      password: inputPassword.current.value,
    });

    const validate = () => {
      let schema = yup.object().shape({
        name: yup
          .string('Necessário preencher o campo de Usuário')
          .required('Necessário preencher o campo de Usuário'),
        password: yup
          .string('Necessário preencher o campo de Senha')
          .required('Necessário preencher o campo de Senha'),
      });

      try {
        schema.validate(user);
        setSend(true);
        return true;
      } catch (err) {
        setStatus({
          type: 'error',
          message: err.errors,
        });
        setSend(false);
        return false;
      }
    };

    if (!validate()) return;

    if (result.ok) {
      setStatus({
        type: 'success',
        message: 'Usuário cadastrado com sucesso!',
      });
      setSend(user);
    } else {
      setStatus({
        type: 'exists',
        message: 'Em uso',
      });
    }
  };

  console.log(user);
  console.log(send);
  console.log(status);

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
  url: P.string.isRequired,
  buttonText: P.string.isRequired,
  title: P.string,
};
