import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home/index'
import Navbar from './Components/Navbar/index'
import AboutMe from './Components/About/index'
import Projects from './Components/Projects/index'
import Contact from './Components/Contact/index'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
