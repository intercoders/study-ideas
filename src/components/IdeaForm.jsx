import React from 'react';
import PropTypes from 'prop-types';

import { FormWrapper, FormButton, ActionsWrapper } from './IdeaForm.styles';

const IdeaForm = ({ onSubmit }) => (
  <FormWrapper onSubmit={onSubmit}>
    <input type="text" />
    <textarea />
    <ActionsWrapper>
      <FormButton>Cancel</FormButton>
      <FormButton>Ok</FormButton>
    </ActionsWrapper>
  </FormWrapper>
);

IdeaForm.propTypes = {
  onSubmit: PropTypes.func,
};

IdeaForm.defaultProps = {
  onSubmit: () => {},
};

export default IdeaForm;
