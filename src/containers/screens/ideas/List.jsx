import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  requestList,
  requestSingle,
} from '$redux/ideas/actions';
import { gotoScreen } from '$redux/screen/actions';

import IdeaCard from '$components/IdeaCard';
import { Wrapper } from './List.styles';

class IdeasList extends React.Component {
  componentDidMount = () => {
    const { dispatch } = this.props;

    dispatch(requestList());
  }

  handleCardClick = (id) => {
    const { dispatch } = this.props;

    dispatch(requestSingle(id));
    dispatch(gotoScreen('ideas-edit'));
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
      <Wrapper>
        {ideas
          .filter(({ title }) => title.toLowerCase().includes(filter.toLowerCase()))
          .map(({ id, title, created }) => (
            <IdeaCard
              onClick={() => this.handleCardClick(id)}
              key={id}
              title={title}
              description="Study stuff"
              date={created}
              color="red"
            />
          ))
        }
      </Wrapper>
    );
  }
}

IdeasList.propTypes = {
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
    ideas: state.ideas.list,
    filter: state.filters.filter,
  }),
)(IdeasList);
