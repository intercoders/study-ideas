import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IdeaCard from '$components/IdeaCard';
import { IdeaList } from './ListScreen.styles';

// eslint-disable-next-line react/prefer-stateless-function
class ListScreen extends React.Component {
  render() {
    const { ideas } = this.props;

    return (
      <IdeaList>
        {ideas.map(({ title }) => (
          <IdeaCard
            key={title}
            title={title}
            description="Estudiar aquello o lo otro"
            date="1/1/2019"
            color="red"
          />
        ))}
      </IdeaList>
    );
  }
}

ListScreen.propTypes = {
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(
  state => ({
    ideas: state.ideas,
  }),
)(ListScreen);
