import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route} from "react-router-dom";
import QuizPage from './components/QuizPage';

class GeoApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/quiz" component={QuizPage} />
        </div>
      
      </Router>
    );
  }
}

export default GeoApp;
