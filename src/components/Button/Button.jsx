import PropTypes from 'prop-types';

import './Button.module.css';

const Button = ({ value, onClick }) => (
  <button type="button" onClick={onClick}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
