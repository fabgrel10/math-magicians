import PropTypes from 'prop-types';

import styles from './ButtonBox.module.css';

const ButtonBox = ({ children }) => <div className={styles.buttonBox}>{children}</div>;

ButtonBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonBox;
