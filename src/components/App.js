import React, { Component } from 'react';
import '../styles/App.css';
import apiKey from './apiKey.js';

const API_KEY = apiKey;
console.log(API_KEY);

class App extends Component {
  render() {
    return (
      <div>
        <p>Yola Brola</p>
      </div>
    )
  }
}

export default App;
