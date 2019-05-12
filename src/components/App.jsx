import React from 'react';
import { NavLink } from 'react-router-dom';

import Main from './Main';

const App = () => {
  return (
    <div>
      <header className="site-header group">
        <div className="site-title">
          <h1>NY Woodworking</h1>
        </div>
        <div className="site-core-nav">
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink activeClassName="current" exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to="/about">About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="current" exact to="/resources">Resources</NavLink>
              </li>
            </ul>
          </nav>
          <NavLink activeClassName="credentials" exact to="/order">
            <button type="button">Place An Order</button>
          </NavLink>
        </div>
      </header>
      <main className="main-content">
        <Main />
      </main>
      <footer className="site-footer">
        <p>
          NY Woodworking &copy; 2019
        </p>
      </footer>
    </div>
  );
};

export default App;
