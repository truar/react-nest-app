import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FizzBuzzService } from './services/FizzBuzz.service';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const fizzBuzzService = new FizzBuzzService();
root.render(
  <React.StrictMode>
    <App fizzBuzzService={fizzBuzzService}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
