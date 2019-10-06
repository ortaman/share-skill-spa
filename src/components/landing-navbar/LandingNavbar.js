import React from 'react';
import { NavLink } from 'react-router-dom';

import FacebookLoginButton from '../../components/facebook/FacebookLoginButton';

import reactLogo from './react-logo.png';
import './LandingNavbar.css';


class LandingNavbar extends React.Component {
  render() {
    return (
      <section>
        <nav className="navbar navbar-expand-md fixed-top">

          <NavLink exact to="/">
            <img src={reactLogo} width="60" height="40" alt="" />
          </NavLink>

          <NavLink exact className="navbar-brand" to="/">
            COMPARTE SKILL
          </NavLink>

          {/*   Toggler/collapsibe Button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*  Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <FacebookLoginButton history={this.props.history}/>
              </li>
            </ul>
          </div>

        </nav>
      </section>
    )
  }
};

export default LandingNavbar;
