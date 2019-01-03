import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from '$components/layout/Container';

import Header from './Header';

import screens from './screens';

import { Wrapper, Main } from './App.styles';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const { screenSlug } = this.props;
    const CurrentScreen = screens[screenSlug];

    return (
      <Wrapper>
        <Header />
        <Main>
          <Container>
            <CurrentScreen />
          </Container>
        </Main>
      </Wrapper>
    );
  }
}

App.propTypes = {
  screenSlug: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    screenSlug: state.screen.slug,
  }),
)(App);
