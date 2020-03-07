import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import Sports from './components/pages/Sports';
import Theater from './components/pages/Theater';
import Family from './components/pages/Family';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/music' component={Music} />
            <Route exact path='/sports' component={Sports} />
            <Route exact path='/theater' component={Theater} />
            <Route exact path='/family' component={Family} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
