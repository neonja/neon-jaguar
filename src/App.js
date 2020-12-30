import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter'; // default redux component
import HelloWorld from './features/hello_world_backend/HelloWorld.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld/>
      </header>
    </div>
  );
}

export default App;
