import PropTypes from 'prop-types';

import styles from './Display.module.css';

const Display = ({ result }) => (
  <div className={styles.display} mode="single" max={70}>
    <p>{result}</p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
