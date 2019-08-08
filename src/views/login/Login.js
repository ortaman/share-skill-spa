import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import LandingNavbar from '../../components/landing-navbar/LandingNavbar'
import { UserService } from '../../_services/userService'

import "./Login.css";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    UserService.login(this.state)
      .then(response => {
          console.log('LOGIN:::', response)
          this.props.history.push("/search");
      })
      .catch(error => {
          console.error('LOGIN_ERROR::: ', error);
      })

  }

  render() {
    return (
      <section className="Login">
        <LandingNavbar appName="Comparte Skill" />

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="lg"
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="lg"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>

      </section>
    );
  }
}

export default Login
