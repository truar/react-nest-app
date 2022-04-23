interface FizzBuzzNumber {
  MULTIPLE_OF_3_AND_5: () => string;
  MULTIPLE_OF_3: () => string;
  MULTIPLE_OF_5: () => string;
  NOT_A_MULTIPLE: (n: number) => string;
}

function _fizzBuzz(input: FizzBuzzNumber): (n: number) => string {
  return (n: number): string => {
    if (n % 15 === 0) return input.MULTIPLE_OF_3_AND_5();
    if (n % 3 === 0) return input.MULTIPLE_OF_3();
    if (n % 5 === 0) return input.MULTIPLE_OF_5();
    else return input.NOT_A_MULTIPLE(n);
  };
}

export function fizzBuzz(input: number): string {
  return _fizzBuzz({
    MULTIPLE_OF_3_AND_5: () => 'fizzbuzz',
    MULTIPLE_OF_3: () => 'fizz',
    MULTIPLE_OF_5: () => 'buzz',
    NOT_A_MULTIPLE: (n) => String(n),
  })(input);
}

function allNumbersFrom1To(inclusiveEnd: number): number[] {
  return Array.from({ length: inclusiveEnd }, (_, i) => i + 1);
}

export function fizzBuzzGenerator(inclusiveEnd: number): string[] {
  return allNumbersFrom1To(inclusiveEnd).map((n) => fizzBuzz(n));
}
