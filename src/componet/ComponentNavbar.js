import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";



function ComponentNabar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img
          src="https://c8.alamy.com/compes/wwcbtt/icono-de-compras-online-en-el-comic-de-estilo-tienda-smartphone-cartoon-vectoriales-ilustracion-sobre-fondo-blanco-aisladas-concepto-de-negocio-en-el-mercado-efecto-splash-wwcbtt.jpg"
          width="100"
          height="50"
          className="d-inline-block align-top"
          alt=""
        />
        <Navbar.Brand href="#home"><Link to="/">De todo un poco</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Link to="productos">
                Productos
              </Link>
            </Nav.Link>
            <NavDropdown>

              <NavDropdown.Item href="#action/3.1">
                <Link to="/marcas"> Semillas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/cupcakeparadise">Tortas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to="/disfracesfantasia">Disfraces</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <Link to="/elestudiante">Utiles Escolares</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">

                <Link to='/bellapandora'>joyas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                <Link to="/sabordivino">Chocolate</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                <Link to="/elquijotedelamancha">limpieza</Link>
              </NavDropdown.Item>


              <NavDropdown.Item href="#action/3.8">
                <Link to="/latiendita">Ropa</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Link to="/login">
            <button className="btn btn-primary">Ingresar</button>
          </Link>
          <Link to="/registration">
            <button className="btn btn-primary">Registrar</button>
          </Link>



          <Nav className="me-auto">
            <NavDropdown title="Usuario" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/datosusuario">configuracion</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                <Link to="/productos/registro">
                  Vender
                </Link>

              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to="/formulario">
                  Comprar
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">
                <Link to="/misfavoritos">
                Mis favoritos
                </Link>
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
      </Container >
    </Navbar >
  );
}

export default ComponentNabar;
