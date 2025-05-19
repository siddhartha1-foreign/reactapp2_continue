import './App.css';
import React, { Component, createRef } from 'react';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
// import LoadingBar from 'https://cdn.skypack.dev/pin/react-top-loading-bar@v3.0.2-Jd6VPWhyMeky5KrgFUDr/mode=imports,min/optimized/react-top-loading-bar.js';

export default class App extends Component {
  pageSize = 15;


  

  render() {
    return (
      <div>
        <Router>
         <LoadingBar
        color="#f11946"
        progress={10}
      
      />
          <Navbar />
          <Routes>
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} category="general" setProgress={this.setProgress} />} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} category="business" setProgress={this.setProgress} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" setProgress={this.setProgress} />} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} category="health" setProgress={this.setProgress} />} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} category="science" setProgress={this.setProgress} />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} category="sports" setProgress={this.setProgress} />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} category="technology" setProgress={this.setProgress} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
