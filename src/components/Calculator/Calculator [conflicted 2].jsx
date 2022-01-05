import React, { PureComponent } from 'react';
import CalculatorFrame from '../CalculatorFrame/CalculatorFrame';
import Display from '../Display/Display';
import ButtonBox from '../ButtonBox/ButtonBox';
import Button from '../Button/Button';
import calculate from '../../logic/calculate';

const btnValues = [
  ['AC', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

class Calculator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: '',
      operation: null,
    };
  }

  render() {
    return (
      <CalculatorFrame>
        <Display value="0" />
        <ButtonBox>
          {
          btnValues.flat().map((btn, i) => (
            <Button
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              value={btn}
              name={btn}
              onClick={this.handleClick}
            />
          ))
        }
        </ButtonBox>
      </CalculatorFrame>
    );
  }
}

export default Calculator;
