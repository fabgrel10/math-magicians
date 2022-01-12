import operate from '../../logic/operate';

describe('operate', () => {
  it('should return the sum of the two input numbers ', () => {
    expect(parseInt(operate(2, 3, '+'), 10)).toEqual(5);
  });
  it('should return the difference of the two input numbers ', () => {
    expect(parseInt(operate(5, 3, '-'), 10)).toEqual(2);
  });
  it('should return the multiple of the two input numbers ', () => {
    expect(parseInt(operate(2, 3, 'x'), 10)).toEqual(6);
  });
  it('should return the division of the two input numbers ', () => {
    expect(parseInt(operate(6, 3, '÷'), 10)).toEqual(2);
  });
  it('should return Can\'t divide by 0.', () => {
    expect(parseInt(operate(6, 0, '÷'), 10)).toBe(NaN);
  });
  it('should return the modulo of the two numbers ', () => {
    expect(parseInt(operate(6, 4, '%'), 10)).toEqual(2);
  });
  it('should return find modulo as Can\'t by 0.', () => {
    expect(parseInt(operate(6, 0, '%'), 10)).toBe(NaN);
  });
});
