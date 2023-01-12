import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>SellerApp</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="ms-2 text-dark" to="/AllItems">
              All
            </Link>
            <Link className="ms-2 text-dark" to="">
              Features
            </Link>
            <Link className="ms-2 text-dark" to="/SellItem">
              Sell
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
