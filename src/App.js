import React, { Component } from 'react';
import kirpicher from './kirpicher.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={ kirpicher } alt="logo" className="logo"/>
      </div>
    );
  }
}

export default App;
