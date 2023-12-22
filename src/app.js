import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header.js';
import About from './components/about.js';
import Resume from './components/resume.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import Passion from './components/passion.js';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/resume" component={Resume} />
        {/* <Route path="/portfolio" component={Portfolio} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/contact" component={Passion} />
      </Switch>
    </Router>
  );
}

export default App;
