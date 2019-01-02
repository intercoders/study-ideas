import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Search.styles';

const Search = ({ value, children: placeholder, onChange }) => (
  <Wrapper>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </Wrapper>
);

Search.propTypes = {
  value: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func,
};

Search.defaultProps = {
  value: '',
  children: '',
  onChange: () => {},
};

export default Search;
