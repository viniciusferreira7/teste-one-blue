import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const ButtonRegister = ({ children, handleClick }) => {
  return <Styled.Container onClick={handleClick}>{children}</Styled.Container>;
};

ButtonRegister.propTypes = {
  children: P.string.isRequired,
  handleClick: P.func,
};
