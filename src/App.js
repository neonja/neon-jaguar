import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter'; // default redux component
import HelloWorld from './features/hello_world_backend/HelloWorld.js';
import Header from './components/Header/Header.js';
import FrontPage from './pages/FrontPage/FrontPage.js';
import Footer from './components/Footer/Footer.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <FrontPage/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
