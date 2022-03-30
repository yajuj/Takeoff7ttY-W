import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
interface INavbarComponent {
  isAuth: boolean;
  logout: () => void;
}

const NavbarComponent: React.FC<INavbarComponent> = ({ isAuth, logout }) => {
  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>Contacts Book</Link>
        </Navbar.Brand>
        <Nav className='me-left'>
          {isAuth ? (
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          ) : (
            <Nav.Link>
              <Link to='login'>Login</Link>
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
