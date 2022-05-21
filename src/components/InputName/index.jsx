import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const InputName = ({ text }) => {
  return (
    <Styled.Container
      type="text"
      placeholder="Digite seu usuário"
      value={text}
      required
    />
  );
};

InputName.propTypes = {
  text: P.string,
};
