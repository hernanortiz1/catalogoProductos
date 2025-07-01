import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/coffee_logo.png";
import { NavLink, Link } from "react-router"

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            src={logo}
            alt="logo Rolling Coffee"
            className="img-fluid"
            width={150}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link" to={"/"}>Inicio</Nav.Link>
            <Nav.Link className="nav-link" to={"/administrador"}>Administrador</Nav.Link>
            <Button className="nav-link " to={"/login"} >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
