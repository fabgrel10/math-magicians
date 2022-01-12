import React from 'react';
import { render } from '@testing-library/react';
import Display from '../../components/Calculator/Display/Display';
import Button from '../../components/Calculator/Button/Button';
import ButtonBox from '../../components/Calculator/ButtonBox/ButtonBox';
import CalculatorFrame from '../../components/Calculator/CalculatorFrame/CalculatorFrame';

describe('components', () => {
  it('test Display components renders correctly', () => {
    const { queryByTitle } = render(<Display />);
    expect(queryByTitle('display-title')).toBeTruthy();
  });
  it('test Button components renders correctly', () => {
    const { queryByTitle } = render(<Button />);
    expect(queryByTitle('button-title')).toBeTruthy();
  });
  it('test ButtonBox components renders correctly', () => {
    const { queryByTitle } = render(<ButtonBox />);
    expect(queryByTitle('button-box-title')).toBeTruthy();
  });
  it('test CalculatorFrame components renders correctly', () => {
    const { queryByTitle } = render(<CalculatorFrame />);
    expect(queryByTitle('calculator-frame-title')).toBeTruthy();
  });
});
