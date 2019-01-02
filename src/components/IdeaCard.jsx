import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, DetailsWrapper, SideLine } from './IdeaCard.styles';

const IdeaCard = ({
  title,
  color,
  date,
  star,
}) => (
  <Wrapper>
    <SideLine color={color} />
    <div>
      <h1>{title}</h1>
      <DetailsWrapper>
        <span>{date}·</span>
        <span>{star}</span>
      </DetailsWrapper>
    </div>
  </Wrapper>
);

IdeaCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  date: PropTypes.string.isRequired,
  star: PropTypes.number,
};

IdeaCard.defaultProps = {
  color: 'red',
  star: 1,
};

export default IdeaCard;
