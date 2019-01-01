import React, { Component } from 'react';
/* eslint-disable */
import Container from '$components/layout/Container';

import { Wrapper, Header, Main } from './App.styles';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Container>
            <h1>Study Ideas</h1>
          </Container>
        </Header>
        <Main>
          <Container>
            List of ideas...
          </Container>
        </Main>
      </Wrapper>
    );
  }
}

export default App;
