import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import LandingNavbar from '../../components/landing-navbar/LandingNavbar';
import Footer from '../../components/footer/Footer';

import './Landing.css';


class Landing extends Component {

  render() {

    return (
      <section className="Landing">

        <LandingNavbar history={this.props.history}/>

        <header>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/LAaSoL0LrYs/1920x1080"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p> </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/LAaSoL0LrYs/1920x1080"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p> </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/LAaSoL0LrYs/1920x1080"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p> </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </header>

        <Footer appName="Comparte Skill"/>
      </section>
    );
  }
}

export default Landing;
