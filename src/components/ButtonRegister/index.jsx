import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const ButtonRegister = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

ButtonRegister.propTypes = {
  children: P.node.isRequired,
};
