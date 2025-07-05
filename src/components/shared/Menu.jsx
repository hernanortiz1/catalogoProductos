import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../../assets/coffee_Logo.png";
import { NavLink, Link, useNavigate } from "react-router";

const Menu = ({ usuarioAdmin, setUsuarioAdmin }) => {
  const navegacion = useNavigate();
  const logout = () => {
    setUsuarioAdmin(false);
    // limpio de sesion lo que tenga esa key
    sessionStorage.removeItem("userKey");
    // redirecciono al inicio
    navegacion("/");
  };

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
            <NavLink className="nav-link" to={"/"}>
              Inicio
            </NavLink>
            {usuarioAdmin ? (
              <>
                {/* si el usuario es admin renderiza el componente admin y un btn logout */}
                <NavLink className="nav-link" to={"/administrador"}>
                  Administrador
                </NavLink>
                <Button className="nav-link" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              // si no es admin renderiza el login
              <NavLink className="nav-link" to={"/login"}>
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
