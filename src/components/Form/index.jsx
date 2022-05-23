import P from 'prop-types';
import React, { useRef, useState } from 'react';
import * as yup from 'yup';

import * as Styled from './styles';
import { useFetch } from './useFetch';

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

  const inputName = useRef();
  const inputPassword = useRef();
  const [result, exists] = useFetch(
    url,
    user.name != '' && user.name,
    user.password != '' && user.password,
  );

  const handleRegister = async () => {
    setUser({
      name: inputName.current.value,
      password: inputPassword.current.value,
    });
    if (!(await validate())) return;

    if (user.name !== '' || user.password !== '') {
      setStatus({
        type: 'success',
        message: 'Usuário cadastrado com sucesso!',
      });
    } else if (exists) {
      setStatus({
        type: 'exists',
        message: 'Em uso',
      });
    }
  };

  const validate = async () => {
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

  console.log(result);
  console.log(user);
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
      {exists && <p>Já está em uso</p>}
    </Styled.Container>
  );
};

Form.propTypes = {
  url: P.string.isRequired,
  buttonText: P.string.isRequired,
  title: P.string,
};
