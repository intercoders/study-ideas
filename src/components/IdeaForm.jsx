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

const IdeaForm = ({
  onSubmit,
  onClickClose,

  // values
  title,
  description,

  // handlers
  onChangeTitle,
  onChangeDescription,
}) => (
  <FormWrapper onSubmit={onSubmit}>
    <InputGroup>
      <input
        type="text"
        placeholder="Your title..."
        value={title}
        onChange={onChangeTitle}
      />
      <textarea
        placeholder="Write a description here..."
        value={description}
        onChange={onChangeDescription}
      />
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

  // values
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

  // handlers
  onChangeTitle: PropTypes.func,
  onChangeDescription: PropTypes.func,
};

IdeaForm.defaultProps = {
  onSubmit: e => e.preventDefault(),

  // handlers
  onChangeTitle: () => {},
  onChangeDescription: () => {},
};

export default IdeaForm;
