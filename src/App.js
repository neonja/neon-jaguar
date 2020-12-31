import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter'; // default redux component
import HelloWorld from './features/hello_world_backend/HelloWorld.js';
import Header from './components/Header/Header.js';
import FrontPage from './pages/FrontPage/FrontPage.js';
import ShopPage from './pages/ShopPage/ShopPage.js';
import Footer from './components/Footer/Footer.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/boards" component={ShopPage} />
        </Switch>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
