import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter'; // default redux component
import './App.scss';

const HW = () => {
  const [ ourData, setOurData] = useState("")
  useEffect((() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/"; // this gets around cors errors
    const url = "https://pacific-atoll-67065.herokuapp.com/";
    fetch(proxyurl + url)
      .then(x => x.text()) // this is needed until we change response to json
      .then((x) => {
        setOurData(x)
      })
      .catch(x => console.log('!!! x failed',x))
  }) ,[])
  return (
    <span>{ourData}</span>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HW/>
      </header>
    </div>
  );
}

export default App;
