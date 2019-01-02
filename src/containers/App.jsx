import React, { Component } from 'react';

import Container from '$components/layout/Container';
import Search from '$components/Search';
import Button from '$components/Button';

import ListScreen from './screens/ListScreen';
import EditScreen from './screens/EditScreen';

import {
  Wrapper,
  Header,
  Main,
  ActionsWrapper,
} from './App.styles';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Container>
            <div className="items">
              <h1>Study Ideas</h1>
              <ActionsWrapper>
                <Search value="">Filter...</Search>
                <Button>Toggle order</Button>
              </ActionsWrapper>
            </div>
          </Container>
        </Header>
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
