import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const FlagSuccess = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

FlagSuccess.propTypes = {
  children: P.string,
};
