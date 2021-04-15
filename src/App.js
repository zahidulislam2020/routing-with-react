import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'

import Nav from './components/Nav'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Service from './components/Service'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/gallery'>
            <Gallery />
          </Route>
          <Route path='/service'>
            <Service />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
