import PropTypes from 'prop-types';

import './Button.module.css';

const Button = ({ onClick, value }) => (
  <button type="button" onClick={onClick}>
    {value}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Button;
