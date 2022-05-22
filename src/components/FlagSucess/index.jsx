import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const FlagSucess = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

FlagSucess.propTypes = {
  children: P.node.isRequired,
};
