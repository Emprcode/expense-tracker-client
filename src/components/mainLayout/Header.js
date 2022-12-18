import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Headers = () => {
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <h2> Expenses Tracker</h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">
              <i class="fa-solid fa-house-user text-danger"></i>
            </Link>
            <Link to="/register">
              <i class="fa-solid fa-user-plus text-warning"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
