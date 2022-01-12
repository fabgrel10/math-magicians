import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './CalculatorFrame.module.css';

class CalculatorFrame extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className={styles.wrapper} title="calculator-frame-title">{children}</div>;
  }
}

export default CalculatorFrame;
