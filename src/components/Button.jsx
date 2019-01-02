import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.styles';

const Button = ({ children, onClick }) => (
  <StyledButton
    type="button"
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
