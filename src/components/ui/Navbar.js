import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <div className="container Navbar-container">
          <header>
            <Link  exact to="/" className="Navbar-brand">
              Movie API
            </Link>
          </header>
          <ul className="Navbar-list">
            <li className="Navbar-list-item">
              <NavLink exact activeClassName="Navbar-active" to="/now_playing" className="Navbar-link">
                Now Streaming
              </NavLink>
            </li>
            <li className="Navbar-list-item">
              <NavLink exact activeClassName="Navbar-active" to="/upcoming" className="Navbar-link">
                Upcoming
              </NavLink>
            </li>
            <li className="Navbar-list-item">
              <NavLink exact activeClassName="Navbar-active" to="/popular" className="Navbar-link">
                Popular
              </NavLink>
            </li>
            <li className="Navbar-list-item">
              <NavLink exact activeClassName="Navbar-active" to="/top_rated" className="Navbar-link">
                Top Rated
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
