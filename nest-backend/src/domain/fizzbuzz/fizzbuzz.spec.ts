import { fizzBuzz, fizzBuzzGenerator } from './fizzBuzz';

describe('FizzBuzz Tests', () => {
  it('should return 1 when 1 given', () => {
    expect(fizzBuzz(1)).toBe('1');
  });
  it('should return 2 when 2 given', () => {
    expect(fizzBuzz(2)).toBe('2');
  });

  describe('Multiple of 3 only', () => {
    it('should return fizz when 3 given', () => {
      expect(fizzBuzz(3)).toBe('fizz');
    });
    it('should return fizz when 6 given', () => {
      expect(fizzBuzz(6)).toBe('fizz');
    });
  });
  describe('Multiple of 5 only', () => {
    it('should return fizz when 5 given', () => {
      expect(fizzBuzz(5)).toBe('buzz');
    });
    it('should return fizz when 10 given', () => {
      expect(fizzBuzz(10)).toBe('buzz');
    });
  });
  describe('Multiple of 3 and 5', () => {
    it('should return fizz when 15 given', () => {
      expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('should return fizz when 30 given', () => {
      expect(fizzBuzz(30)).toBe('fizzbuzz');
    });
  });
  describe('FizzBuzzNumber Generator', () => {
    it('should return a list of fizzBuzzNumber from 1 to end', () => {
      expect(fizzBuzzGenerator(15)).toStrictEqual([
        '1',
        '2',
        'fizz',
        '4',
        'buzz',
        'fizz',
        '7',
        '8',
        'fizz',
        'buzz',
        '11',
        'fizz',
        '13',
        '14',
        'fizzbuzz',
      ]);
    });
  });
});
