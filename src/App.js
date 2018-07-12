import React, { Component } from 'react';
import CounterComponent from './components/CounterComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterComponent />
      </div>
    );
  }
}

export default App;
