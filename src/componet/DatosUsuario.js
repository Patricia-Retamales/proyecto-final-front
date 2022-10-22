import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";



function DatosUsuario() {
  return (
    <Form style={{ backgroundImage: "linear-gradient(#d8af97, #edb8fa)" }}>
      <ComponentNabar />
      <div style={{ margin: "18%", color: "#d1052a", background: "white", height: "80%", width: "55%", borderRadius: "9px black", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black", padding: "10px", alignItems: "stretch" }}>
        <Row>
          <h1 style={{ padding: "2px", textShadow: "2px 2px 5px #000000" }}>Configuracion</h1>
          <Col>
            <Form.Label>Nombres </Form.Label>
            <Form.Control placeholder=" name" />
          </Col>
          <Col>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control placeholder="surname" />
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress2" style={{ width: "200px" }}>
          <Form.Label>Rut</Form.Label>
          <Form.Control placeholder="Rut" />

        </Form.Group>
        <Row className="mb-3" >
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>RepeatEmail</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <Row className="mb-3" >
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword" >
            <Form.Label>Repetir Contraseña</Form.Label>
            <Form.Control type="Seleccionar" placeholder="Password" />
          </Form.Group>
        </Row>

        <Row className="mb-3" >
          <Form.Group className="mb-3" controlId="formGridAddress1" style={{ width: "380px" }}>
            <Form.Label>Direccion</Form.Label>
            <Form.Control placeholder="Address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress2" style={{ width: "380px" }}>
            <Form.Label>casa o depto</Form.Label>
            <Form.Control placeholder="casa o depto" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Comuna</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Seleccionar</option>
              <option>La Granja</option>
              <option>Cerrillos</option>
              <option>Cerro Navia</option>
              <option>Conchalí</option>
              <option>El Bosque</option>
              <option>Estación Central</option>
              <option></option>
              <option></option>

            </Form.Select>
          </Form.Group>



          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Region</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Seleccionar</option>
              <option>Region Metropolitana</option>
              <option>Arica y Parinacota</option>
              <option>La Araucania</option>
              <option>Coquimbo</option>
              <option>Ñuble</option>
              <option>Los Rios</option>
              <option>Los Lagos</option>
              <option>Valparaiso</option>

            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Ciudad</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Seleccionar</option>
              <option>Concepcion</option>
              <option>Calama</option>
              <option>Chillan</option>
              <option>Temuco</option>
              <option>Santiago</option>
              <option>Valparaiso</option>
              <option>Viña del Mar</option>
              <option>Pichilemu</option>

            </Form.Select>
          </Form.Group>



        </Row>











        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to="/Home">
          <Button variant="outline-secondary" type="submit" style={{ width: "20rem", position: "relative", margin: "40px", }}>
            Confirmar
          </Button>
        </Link>
      </div>
      <Footer />

    </Form>

  );
}

export default DatosUsuario;