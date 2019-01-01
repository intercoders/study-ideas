import React, { Component } from 'react';

import Button from '$components/Button';

import { Wrapper } from './App.styles';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Button />
      </Wrapper>
    );
  }
}

export default App;
