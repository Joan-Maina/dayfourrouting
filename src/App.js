import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/AboutUs';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home}/>
              
          <Route path="/about" component={About}/>
            
          <Route path="/shop" component={Shop}/>
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;