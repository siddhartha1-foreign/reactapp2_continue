import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 

export default class App extends Component {
  c = 'Jhon';
  pageSize = 15
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/general" element={<News  key="general" pageSize={this.pageSize} category="general" />} />
            <Route exact  path="/business" element={<News key="business" pageSize={this.pageSize} category="business" />} />
            <Route exact  path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" />} />
            <Route exact   path="/health" element={<News key="health" pageSize={this.pageSize} category="health" />} />
            <Route exact   path="/science" element={<News key="science" pageSize={this.pageSize} category="science" />} />
            <Route exact  path="/sports" element={<News key="sports"  pageSize={this.pageSize} category="sports" />} />
            <Route exact   path="/technology" element={<News key="technology" pageSize={this.pageSize} category="technology" />} />
          </Routes>
        </Router>
        {/* <h1>Hello, {this.c}</h1> */}
      </div>
    );
  }
}
