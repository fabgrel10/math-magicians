import React from 'react'

import PropTypes from 'prop-types';

import styles from './ButtonBox.module.css';

const ButtonBox = ({ children }) => <div className={styles.buttonBox} title="button-box-title">{children}</div>;

export default ButtonBox;
