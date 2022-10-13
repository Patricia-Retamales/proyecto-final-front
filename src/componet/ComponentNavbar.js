import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function ComponetNavbar() {
  return (
    <div className='navbar' >
      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#">Mini Pymes a su dispocicion</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll

            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>

              <div className='registro' style={{ left: "200px" }}>
                <Link to="/login" >
                  <button className="btn btn-primary"> get into</button>
                </Link>
                <Link to="/registration">
                  <button className="btn btn-primary">create</button>
                </Link>
              </div>


              <NavDropdown title="Link" id="navbarScrollingDropdown" style={{ left: "70%" }}>
                <NavDropdown.Item href="#action3">
                  mis datos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  productos
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Vender
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Comprar
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                  mis favoritos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action8">
                  cerrar secion
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
}

export default ComponetNavbar;