import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuizPage from './components/QuizPage';
import TestPage from './components/TestPage';

class GeoApp extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quiz" component={QuizPage} />
          <Route exact path="/test" component={TestPage} />
        </div>

      </Router>
    );
  }
}

export default GeoApp;
