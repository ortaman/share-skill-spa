import React from 'react';
import {
  Navbar,
  Nav,
} from 'react-bootstrap';


class HomeNavbar extends React.Component {

    onLogoutClick(event) {
      localStorage.removeItem('Token')
    }

    render() {
        return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/search">{this.props.appName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>

              <Nav>
                <Nav.Link href="/search"> Buscar </Nav.Link>
                <Nav.Link href="/matches"> Matches </Nav.Link>
                <Nav.Link href="/profile/1"> Perfil </Nav.Link>
                <Nav.Link href="/Logout" onClick={this.onLogoutClick}> Logout </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }

};

export default HomeNavbar;
