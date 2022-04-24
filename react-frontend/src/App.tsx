import React, { useState } from 'react';
import './App.css';
import { FizzBuzzService } from './services/FizzBuzz.service';

type AppProps = {
  fizzBuzzService: FizzBuzzService
}

function App({ fizzBuzzService }: AppProps) {
  const [number, setNumber] = useState('');
  const [fizzBuzzNumber, setFizzBuzzNumber] = useState('');
  const [allNumbers, setAllNumbers] = useState(['']);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [resultSingle, resultGenerator] = await Promise.all([
      fizzBuzzService.fetchSingle(number),
      fizzBuzzService.fetchRange(number)
    ]);
    setFizzBuzzNumber(resultSingle);
    setAllNumbers(resultGenerator);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter a number" type="text" value={number} onChange={e => setNumber(e.target.value)}/>
        <input type="submit" value="Send"/>
      </form>
      {fizzBuzzNumber && <div>Result: {fizzBuzzNumber}</div>}
      {allNumbers && <ul>{allNumbers.map((n, idx) => <li key={idx.toString()}>{n}</li>)}</ul>}
    </div>
  );
}

export default App;
