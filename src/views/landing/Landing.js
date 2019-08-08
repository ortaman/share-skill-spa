import React, { Component } from 'react';
import LandingNavbar from '../../components/landing-navbar/LandingNavbar';

import logo from '../../_images/logo.svg';
import './Landing.css';


class Landing extends Component {
  render() {
    return (
      <section className="Landing">
        <LandingNavbar appName="Comparte Skill" />

        <header className="Landing-header">
          <img src={logo} className="Landing-logo" alt="logo"/>
        </header>

      </section>
    );
  }
}

export default Landing;
