import React from 'react'
import PropTypes from 'prop-types';

import styles from './Display.module.css';

const Display = ({ total, operation, next }) => (
  <div className={styles.display} title="display-title" mode="single" max={70}>
    <p>{next || operation || total || 0}</p>
  </div>
);

Display.propTypes = {
  total: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  operation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  next: PropTypes.string,
};

Display.defaultProps = {
  total: 0,
  operation: null,
  next: null,
};

export default Display;
