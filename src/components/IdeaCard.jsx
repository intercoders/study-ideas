import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, FooterTitle, AsideTitle } from './IdeaCard.styles';

const IdeaCard = ({
  title,
  color,
  date,
  star,
}) => (
  <Wrapper>
    <AsideTitle color={color} />
    <div className="card-contents">
      <h1>{title}</h1>
      <FooterTitle>
        <span>{date}·</span>
        <span>{star}</span>
      </FooterTitle>
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
