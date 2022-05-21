import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const InputPassword = ({ text }) => {
  return (
    <Styled.Container
      type="password"
      placeholder="Digite sua senha"
      value={text}
      required
    />
  );
};

InputPassword.propTypes = {
  text: P.string,
};
