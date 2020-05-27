import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Music from './components/pages/Music';
import Sports from './components/pages/Sports';
import Theater from './components/pages/Theater';
import NotFound from './components/pages/NotFound';
import './App.css';

function App() {
  return (
    <Router basename='/'>
      <div className='App'>
        <Navbar />
        <div>
          <Switch>
            <Route exact path='https://kechamberlin.github.io/gig-dig/' component={Home} />
            <Route exact path='https://kechamberlin.github.io/gig-dig/music' component={Music} />
            <Route exact path='https://kechamberlin.github.io/gig-dig/sports' component={Sports} />
            <Route exact path='https://kechamberlin.github.io/gig-dig/theater' component={Theater} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
