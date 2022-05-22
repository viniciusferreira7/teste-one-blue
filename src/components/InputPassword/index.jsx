import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const InputPassword = ({ text, inputPassword }) => {
  return (
    <Styled.Container
      type="password"
      placeholder={text}
      required
      ref={inputPassword}
    />
  );
};

InputPassword.propTypes = {
  text: P.string,
  inputPassword: P.object,
};
