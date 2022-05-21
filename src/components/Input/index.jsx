import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const Input = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Input.propTypes = {
  children: P.node.isRequired,
};
