import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";



function ComponentNabar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">home</Nav.Link>
            
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
               <Link to="/jardinmistico"> Semillas</Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/cupcakeparadise">Tortas</Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <Link to="/disfrases">Disfrases</Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <Link to="/elestudiante">Utiles Escolares</Link> 
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <Link to='bellasoandoras'>joyas</Link> 
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <Link to="sabordivino">Chocolate</Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
              <Link>limpieza</Link> 
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Link to="/login">
				<button className="btn btn-primary">Ingresar</button>
				</Link>
        <Link to="/registration">
				<button className="btn btn-primary">Registrar</button>
				</Link>



          <Nav ClassName="me-auto">
            <NavDropdown title="Usuario" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Datos de usuario
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Vender
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Comprar
                </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Mis favoritos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Lista
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cerrar sesion
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ComponentNabar;
  ;