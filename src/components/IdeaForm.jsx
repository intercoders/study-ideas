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

const IdeaForm = ({ onSubmit, onClickClose }) => (
  <FormWrapper onSubmit={onSubmit}>
    <InputGroup>
      <input type="text" placeholder="Your title..." />
      <textarea placeholder="Write a description here..." />
    </InputGroup>
    <Separator />
    <ActionsGroup>
      <CloseButton type="button" onClick={onClickClose} />
      <ButtonsWrapper>
        <FormButton type="button">Other action</FormButton>
        <FormButton type="submit">Save</FormButton>
      </ButtonsWrapper>
    </ActionsGroup>
  </FormWrapper>
);

IdeaForm.propTypes = {
  onSubmit: PropTypes.func,
  onClickClose: PropTypes.func.isRequired,
};

IdeaForm.defaultProps = {
  onSubmit: e => e.preventDefault(),
};

export default IdeaForm;
