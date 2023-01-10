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
            <Link to="/AllItems">All Items</Link>
            <Link to="">Features</Link>
            <Link to="">Pricing</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
