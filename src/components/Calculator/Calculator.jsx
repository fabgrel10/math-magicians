import { useState } from 'react';
import CalculatorFrame from '../CalculatorFrame/CalculatorFrame';
import Display from '../Display/Display';
import ButtonBox from '../ButtonBox/ButtonBox';
import Button from '../Button/Button';
import calculate from '../../logic/calculate';

const btnValues = [
  ['AC', '+/-', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: '',
    operation: null,
  });

  const handleClick = (btn) => {
    const calc = calculate(state, btn.toString());
    setState(calc);
  };

  const { total, operation, next } = state;

  return (
    <CalculatorFrame>
      <Display total={total} next={next} operation={operation} />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => (
            <Button
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              value={btn}
              onClick={() => handleClick(btn)}
            />
          ))
        }
      </ButtonBox>
    </CalculatorFrame>
  );
}

export default Calculator;
