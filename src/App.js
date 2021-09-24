import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./home";
import About from './aboutUs';
import Shop from './shop';

export default function App() {
  const navStyle={
    color:'white'
};
  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-links">
            <li> 
              <Link to="/" style={navStyle}>Home</Link>
            </li>
            <li>
              <Link to="/about"style={navStyle}>About</Link>
            </li>
            <li>
              <Link to="/shop" style={navStyle}>Shop</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

