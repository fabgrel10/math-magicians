import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './CalculatorFrame.module.css';

class CalculatorFrame extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className={styles.wrapper}>{children}</div>;
  }
}

CalculatorFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalculatorFrame;
