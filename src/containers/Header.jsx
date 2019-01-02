import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setFilter } from '$redux/filters/actions';

import Container from '$components/layout/Container';
import Search from '$components/Search';
import Button from '$components/Button';

import { Wrapper, ActionsWrapper } from './Header.styles';

class Header extends Component {
  handleFilter = (event) => {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(setFilter(value));
  }

  render() {
    const { filter } = this.props;

    return (
      <Wrapper>
        <Container>
          <div className="items">
            <h1>Study Ideas</h1>
            <ActionsWrapper>
              <Search
                value={filter}
                onChange={this.handleFilter}
              >
                Filter...
              </Search>
              <Button>Toggle order</Button>
            </ActionsWrapper>
          </div>
        </Container>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    filter: state.filters.filter,
  }),
)(Header);
