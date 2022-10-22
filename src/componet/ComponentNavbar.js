import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from "../store/AppContext";
import React, { useContext } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import Badge from 'react-bootstrap/Badge';
 import { SlBasket } from "react-icons/sl";


function ComponentNabar() {

  const { store, actions } = useContext(Context); 

  function deleteFavorite(index) {
    actions.removeFavorite(index);
  }


  return (
    <Navbar collapseOnSelect expand="lg" style={{background:"#888a8a", border:"#9b9b9b 5px solid"}}>
      <Container>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5175/5175268.png"
          width="100"
          height="60"
          className="d-inline-block align-top"
          alt=""
        />
        <Navbar.Brand href="#home"><Link to="/"  style={{ padding: "4px", textShadow:" 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"}}>De todo un poco</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Link to="/productos">
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
            <button   className="btn btn-primary" variant="outlined" ><th>Ingresar</th></button>
          </Link>
          <Link to="/registration">
            <button className="btn btn-primary"><th>Registrar</th></button>
          </Link>



          <Nav className="me-auto">
            <NavDropdown title="Usuario" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="/datosusuario">
                  <th>configuracion</th>
                  </Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">
                <Link to="/Cambiar_clave">
                 <th>Cambiar clave</th> 
                </Link>
              </NavDropdown.Item>

          
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Cerrar sesion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>

        <Dropdown>
              <Dropdown.Toggle variant="primary" id="nav-dropdown-dark-example"
              title="Dropdown">
               <button >{store.favoriteList.length}<SlBasket/> </button>

              </Dropdown.Toggle>

              <Dropdown.Menu>
                {(
                  store.favoriteList.length === 0) ?
                  <Dropdown.Item><h6>vasio</h6></Dropdown.Item> :
                  store.favoriteList.map((favorite, index) =>
                    <Dropdown.Item>{favorite}
                      <button className='icons' onClick={() => { deleteFavorite(index) }}><HiOutlineTrash /></button>
                    </Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
      </Container >
    </Navbar >
  );
}

export default ComponentNabar;
