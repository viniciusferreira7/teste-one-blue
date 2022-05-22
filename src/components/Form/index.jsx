import P from 'prop-types';
import React, { useRef, useState } from 'react';

import * as Styled from './styles';
import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { Button } from '../Button';
import { useFetch } from './useFetch';

export const Form = ({ url, buttonText, input }) => {
  const [user, setUser] = useState({
    name: null,
    password: null,
  });
  const [confirmPass, setConfirmPass] = useState(false);
  const inputName = useRef();
  const inputPassword = useRef();
  const inputPasswordTwo = useRef();

  const [result, exists] = useFetch(
    url,
    !!user.name && user.name,
    !!user.password && user.password,
  );

  console.log(result);

  const handleRegister = () => {
    if (inputPassword.current.value === inputPasswordTwo.current.value) {
      setUser({
        name: inputName.current.value,
        password: inputPassword.current.value,
      });
      setConfirmPass(true);
    }
  };

  console.log(confirmPass);

  return (
    <Styled.Container onClick={(e) => e.preventDefault()}>
      {input && <InputName text="Nome completo" />}
      <InputName inputName={inputName} text="Digite seu usuário" />
      <InputPassword inputPassword={inputPassword} text="Digite sua senha" />
      {input && (
        <InputPassword
          inputPassword={inputPasswordTwo}
          text="Confirme sua senha"
        />
      )}
      {!confirmPass ? <p>As senhas estão diferentes</p> : ''}
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
