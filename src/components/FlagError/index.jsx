import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const FlagError = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

FlagError.propTypes = {
  children: P.oneOfType([P.string, P.array]),
};
