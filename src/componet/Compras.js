import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ComponentNabar from './ComponentNavbar';



function Compras() {
    return (
        <Form style={{ margin: "25px", background:"#ede6db"}}>
 
            <Row>
                <h1 style={{ margin: "25px", }}> Datos del Cliente</h1>

                <Form.Group as={Col} controlId="formGridEmail" style={{ margin: "25px", }}>
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="email" placeholder="Names" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail" style={{ margin: "25px", }}>
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="email" placeholder="Surnames" />
                </Form.Group>

            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail" style={{ margin: "25px", }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail" style={{ margin: "25px", }}>
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="email" placeholder="Address" />
                </Form.Group>

                <Form.Group as={Col} style={{ margin: "25px", }}>
                    <Form.Label>Comuna</Form.Label>
                    <Form.Control placeholder="Commune" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState" style={{ margin: "25px", }}>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Select defaultValue="City">
                        <option>Ciudad...</option>
                        <option>Region Metropolitana</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group className="mb-3" controlId="formGridAddress1" style={{ margin: "25px", }}>
                    <Form.Label>Dato Extra</Form.Label>
                    <Form.Control placeholder="Extra fact" />
                </Form.Group>

                <Form.Group as={Col} style={{ margin: "25px", }}>
                    <Form.Label>Dpto o Casa </Form.Label>
                    <Form.Control placeholder="Dpto o Casa" />
                </Form.Group>
            </Row>


            <h1 style={{ margin: "25px", }}> Informacion de Compras de Productos </h1>


            <Row className="mb-3" style={{ margin: "25px", }}>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Productos</Form.Label>
                    <Form.Select defaultValue="SelecTienda">
                        <option>Seleccione Tienda</option>
                        <option>Cupcake Paradise</option>
                        <option>Disfraces Fantasia</option>
                        <option>El Estudiante</option>
                        <option>El Quijote de la Mancha</option>
                        <option>La Tiendita</option>
                        <option>Marcas</option>
                        <option>Sabor Divino</option>
                        <option>Bella Pandora</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Nombre de Produccto</Form.Label>
                    <Form.Control placeholder="Product name" />
                </Form.Group>


                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Select defaultValue="Quantity">
                        <option>Seleccione</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>stock</Form.Label>
                    <Form.Select defaultValue="Quantity">
                        <option>Seleccione</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="formGridPassword" style={{ margin: "25px", }}>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword" style={{ margin: "25px", }}>
                    <Form.Label>Repetir Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Repeat password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState" style={{ margin: "25px", }}>
                    <Form.Label>Medio de Pago</Form.Label>
                    <Form.Select defaultValue="Payment method">
                        <option>Seleccione</option>
                        <option>Debito</option>
                        <option>Efectivo</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} style={{ margin: "25px", }}>
                    <Form.Label>N° de Tarjeta </Form.Label>
                    <Form.Control placeholder="Card Number" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip" style={{ margin: "25px", }}>
                    <Form.Label>Fecha de Entrega</Form.Label>
                    <Form.Control placeholder="Expiration date" />
                </Form.Group>
            </Row>




            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Link to="/Home">
                <Button variant="primary" type="submit">
                    Confirmar
                </Button>
            </Link>






        </Form>

    );
}

export default Compras;