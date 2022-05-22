import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const InputPassword = ({ name, text, inputPassword }) => {
  return (
    <Styled.Container
      name={name}
      type="password"
      placeholder={text}
      required
      ref={inputPassword}
    />
  );
};

InputPassword.propTypes = {
  name: P.string,
  text: P.string,
  inputPassword: P.object,
};
