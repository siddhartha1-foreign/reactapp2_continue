import "./App.css";
import React, { useState } from "react"; // Corrected: import Component
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";


  const App = () => {
 const  pageSize = 15;
  const country = 'us';
  const apiKey = process.env.REACT_APP_NEWS_API;


 const [progress, setProgress] = useState(0)

  // setProgress = (progress) => {
  //   setState({ progress:progress });
  // };


    return (
      <div>
        <Router>
          <LoadingBar height={3} color="#f11946" progress={setProgress} />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  category="general"
                  country={country}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  pageSize={pageSize}
                  category="business"
                  country={country}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  category="entertainment"
                  country={country}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  category="health"
                  country={country}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  category="science"
                  country={country}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                  category="sports"
                  country={country}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  category="technology"
                  country={country}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }


export default App;