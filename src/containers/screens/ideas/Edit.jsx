import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gotoScreen } from '$redux/screen/actions';

import IdeaForm from '$components/IdeaForm';

import { Wrapper } from './Edit.styles';

class IdeasEdit extends Component {
  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(gotoScreen('ideas-list'));
  }

  render() {
    const { loading, error, single } = this.props;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>There was an error while loading this idea!</div>;

    // take properties from single
    const { title, description } = single;

    return (
      <Wrapper>
        <IdeaForm
          onClickClose={this.handleClose}
          title={title}
          description={description}
        />
      </Wrapper>
    );
  }
}

IdeasEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  single: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

IdeasEdit.defaultProps = {
  single: null,
};

export default connect(
  state => ({
    loading: state.ideas.loading,
    error: state.ideas.error,
    single: state.ideas.single,
  }),
)(IdeasEdit);
