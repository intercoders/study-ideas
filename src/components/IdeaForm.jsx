import React from 'react';
import PropTypes from 'prop-types';

import {
  FormWrapper,
  InputGroup,
  Separator,
  ActionsGroup,
  ButtonsWrapper,
  FormButton,
  CloseButton,
} from './IdeaForm.styles';

const IdeaForm = ({ onSubmit }) => (
  <FormWrapper onSubmit={onSubmit}>
    <InputGroup>
      <input type="text" placeholder="Your title..." />
      <textarea placeholder="Write a description here..." />
    </InputGroup>
    <Separator />
    <ActionsGroup>
      <CloseButton />
      <ButtonsWrapper>
        <FormButton>Cancel</FormButton>
        <FormButton>Save</FormButton>
      </ButtonsWrapper>
    </ActionsGroup>
  </FormWrapper>
);

IdeaForm.propTypes = {
  onSubmit: PropTypes.func,
};

IdeaForm.defaultProps = {
  onSubmit: () => {},
};

export default IdeaForm;
