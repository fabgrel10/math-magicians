import React from 'react'

import PropTypes from 'prop-types';

import './Button.module.css';

const Button = ({ onClick, value }) => (
  <button type="button" title="button-title"  onClick={onClick}>
    {value}
  </button>
);

export default Button;
