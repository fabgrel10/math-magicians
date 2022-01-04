import PropTypes from 'prop-types';

import styles from './Display.module.css';

const Display = ({ value }) => (
  <div className={styles.display} mode="single" max={70}>
    {value}
  </div>
);

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
