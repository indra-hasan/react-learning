import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cart />
      </div>
    );
  }
}

export default App;
