import P from 'prop-types';
import React, { useRef, useState } from 'react';

import * as Styled from './styles';
import { InputName } from '../InputName';
import { InputPassword } from '../InputPassword';
import { Button } from '../Button';
import { useFetch } from './useFetch';

export const Form = ({ url, buttonText }) => {
  const [user, setUser] = useState({
    name: null,
    password: null,
  });

  const [result, exists] = useFetch(
    url,
    !!user.name && user.name,
    !!user.password && user.password,
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
      <Button handleRegister={() => handleRegister()}>{buttonText}</Button>
      {exists && <p>Já está em uso</p>}
    </Styled.Container>
  );
};

Form.propTypes = {
  url: P.string.isRequired,
  buttonText: P.string.isRequired,
};
