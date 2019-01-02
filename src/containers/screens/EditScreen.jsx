import React, { Component } from 'react';

import IdeaForm from '$components/IdeaForm';

import { Wrapper } from './EditScreen.styles';

// eslint-disable-next-line
class EditScreen extends Component {
  render() {
    return (
      <Wrapper>
        <IdeaForm />
      </Wrapper>
    );
  }
}

export default EditScreen;
