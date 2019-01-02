import React, { Component } from 'react';

import Container from '$components/layout/Container';
import Search from '$components/Search';
import Button from '$components/Button';
import IdeaCard from '$components/IdeaCard';

import EditScreen from './screens/EditScreen';

import {
  Wrapper,
  Header,
  Main,
  ActionsWrapper,
  IdeaList,
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
            <IdeaList>
              <IdeaCard
                title="El amor"
                description="Estudiar amor de Dios"
                date="1/1/2019"
                color="red"
              />
              <IdeaCard
                title="La familia"
                description="Estudiar amor de Dios"
                date="1/1/2019"
                color="green"
              />
            </IdeaList>
            <EditScreen />
          </Container>
        </Main>
      </Wrapper>
    );
  }
}

export default App;
