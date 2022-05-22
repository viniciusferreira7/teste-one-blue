import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const Button = ({ children, handleRegister }) => {
  return (
    <Styled.Container onClick={handleRegister}>{children}</Styled.Container>
  );
};

Button.propTypes = {
  children: P.string.isRequired,
  handleRegister: P.func,
};
