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

export const Form = ({ url, buttonText, input = false, title }) => {
  const [user, setUser] = useState({
    name: '',
    userName: '',
    password: '',
  });
  const [status, setStatus] = useState({
    type: null,
    message: null,
  });

  const inputNameComplete = useRef();
  const inputName = useRef();
  const inputPassword = useRef();

  const [result, exists] = useFetch(
    url,
    !!user.name && user.userName,
    !!user.password && user.password,
  );

  const handleRegister = async () => {
    if (!(await validate())) return;

    const saveDataForm = true;

    if (saveDataForm) {
      setStatus({
        type: 'success',
        message: 'Usuário cadastrado com sucesso!',
      });
      setUser({
        userName: inputName.current.value,
        password: inputPassword.current.value,
      });
    } else {
      setStatus({
        type: 'error',
        message: 'Erro: Usuário não cadastrado com sucesso!',
      });
    }
  };

  const validate = async () => {
    let schema = yup.object().shape({
      name: yup
        .string('Necessário preencher o campo Nome')
        .required('Necessário preencher o campo Nome'),
      userName: yup
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
  console.log(status);

  return (
    <Styled.Container onClick={(e) => e.preventDefault()}>
      <h2>{title}</h2>
      {status.type === 'success' && <FlagSuccess>{status.message}</FlagSuccess>}
      {status.type === 'error' && <FlagError>{status.message}</FlagError>}
      {input && (
        <InputName
          inputName={inputNameComplete}
          name="name"
          text="Digite seu nome completo"
        />
      )}
      <InputName
        name="userName"
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
  input: P.bool,
  title: P.string,
};
