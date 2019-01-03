import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gotoScreen } from '$redux/screen/actions';

import IdeaCard from '$components/IdeaCard';
import { IdeaList } from './ListScreen.styles';

class ListScreen extends React.Component {
  handleCardClick = () => {
    const { dispatch } = this.props;

    dispatch(gotoScreen('edit'));
  }

  render() {
    const { ideas, filter } = this.props;

    return (
      <IdeaList>
        {ideas
          .filter(({ title }) => title.toLowerCase().includes(filter.toLowerCase()))
          .map(({ title }) => (
            <IdeaCard
              onClick={this.handleCardClick}
              key={title}
              title={title}
              description="Estudiar aquello o lo otro"
              date="1/1/2019"
              color="red"
            />
          ))
        }
      </IdeaList>
    );
  }
}

ListScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    ideas: state.ideas.data,
    filter: state.filters.filter,
  }),
)(ListScreen);
