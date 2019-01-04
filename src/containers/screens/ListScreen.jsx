import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { request as requestIdeas } from '$redux/ideas/actions';
import { gotoScreen } from '$redux/screen/actions';

import IdeaCard from '$components/IdeaCard';
import { IdeaList } from './ListScreen.styles';

class ListScreen extends React.Component {
  componentDidMount = () => {
    const { dispatch } = this.props;

    dispatch(requestIdeas());
  }

  handleCardClick = () => {
    const { dispatch } = this.props;

    dispatch(gotoScreen('edit'));
  }

  render() {
    const {
      loading,
      error,
      ideas,
      filter,
    } = this.props;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Sorry, an error occurred while loading the list!</div>;

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
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    loading: state.ideas.loading,
    error: state.ideas.error,
    ideas: state.ideas.data,
    filter: state.filters.filter,
  }),
)(ListScreen);
