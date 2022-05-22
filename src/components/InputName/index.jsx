import P from 'prop-types';
import React from 'react';
import * as Styled from './styles';

export const InputName = ({ name, text, inputName }) => {
  return (
    <Styled.Container
      name={name}
      type="text"
      placeholder={text}
      required
      ref={inputName}
    />
  );
};

InputName.propTypes = {
  name: P.string,
  text: P.string,
  inputName: P.object,
};
