import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const InputName = ({ text, inputName }) => {
  return (
    <Styled.Container type="text" placeholder={text} required ref={inputName} />
  );
};

InputName.propTypes = {
  text: P.string,
  inputName: P.object,
};
