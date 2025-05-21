import "./App.css";
import React, { useState } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 15;
  const [country, setCountry] = useState('us');
  
  apiKey=process.env.REACT_APP_NEWS_API
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}  apiKey={this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  category="general" country={country}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}  apiKey={this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  category="business" country={country}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}  apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  category="entertainment" country={country}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}  apiKey={this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  category="health" country={country}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}  apiKey={this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  category="science" country={country}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}  apiKey={this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  category="sports" country={country}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}  apiKey={this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  category="technology" country={country}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
