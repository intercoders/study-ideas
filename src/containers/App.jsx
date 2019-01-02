import React, { Component } from 'react';

import Container from '$components/layout/Container';

import Header from './Header';

import ListScreen from './screens/ListScreen';
import EditScreen from './screens/EditScreen';

import { Wrapper, Main } from './App.styles';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main>
          <Container>
            <ListScreen />
            <EditScreen />
          </Container>
        </Main>
      </Wrapper>
    );
  }
}

export default App;
