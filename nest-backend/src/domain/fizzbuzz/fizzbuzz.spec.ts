import { fizzBuzz } from './fizzBuzz';

describe('FizzBuzz Tests', () => {
  it('should return 1 when 1 given', () => {
    expect(fizzBuzz(1)).toBe('1');
  });
});
