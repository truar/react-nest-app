import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { FizzBuzzService } from './services/FizzBuzz.service';

class DummyFizzBuzzService extends FizzBuzzService {
  fetchRange(inclusiveEnd: string): Promise<string[]> {
    return new Promise((resolve, reject) => resolve(["1"]));
  }
  fetchSingle(number: string): Promise<string> {
    return new Promise((resolve, reject) => resolve("1"));
  }
}

const dummyFizzBuzzService = new DummyFizzBuzzService();

test('renders app component', () => {
  render(<App fizzBuzzService={dummyFizzBuzzService}/>);
  const inputElement = screen.getByPlaceholderText(/Enter a number/i);
  expect(inputElement).toBeInTheDocument();
});
