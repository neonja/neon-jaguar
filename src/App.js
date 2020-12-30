import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

const Paul = () => {
  useEffect((() => {
    // fetch("https://pacific-atoll-67065.herokuapp.com/")
    fetch("https://swapi.dev/api/people/1")
      .then(res => console.log(res, "!!!!"))
  }) ,[])
  return (
    <span>d</span>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Paul/>
      </header>
    </div>
  );
}

export default App;
