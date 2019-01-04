import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gotoScreen } from '$redux/screen/actions';

import IdeaForm from '$components/IdeaForm';

import { Wrapper } from './Edit.styles';

class EditScreen extends Component {
  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(gotoScreen('ideas-list'));
  }

  render() {
    return (
      <Wrapper>
        <IdeaForm onClickClose={this.handleClose} />
      </Wrapper>
    );
  }
}

EditScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(EditScreen);
