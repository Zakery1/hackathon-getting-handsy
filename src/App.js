import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      toggle: false
    }
  }

  render() {

    const style = {
      background: this.state.toggle ? 'green' : 'blue',
      height:'300px',
      width: '300px',
      boxShadow: '1px 4px 5px rgba(0, 0, 0, 0.432)'
    }

    return (
      <div className="App">
        <div style={style}></div>
        <button>Change Color</button>
      </div>
    );
  }
}

export default App;
