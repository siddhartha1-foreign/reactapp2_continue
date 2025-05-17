import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  c = 'Jhon';

  render() {
    return (
      <div>
        <NavBar />
        <News />
        <h1>Hello, {this.c}</h1>
      </div>
    );
  }
}
