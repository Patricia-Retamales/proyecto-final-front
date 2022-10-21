import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";
import { FcLike } from "react-icons/fc";



const CupcakeParadise = () => {
    return (
        <div className='semillas' style={{ background: '#ffffec' }}>
            <ComponentNabar />

            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/5a/eb/7c/5aeb7cbae3b6318c64495f221eb61990.png"
                        alt="First slide"
                        height={500}
                    />
                    <Carousel.Caption>
                        <h3>Cupcake Paradise</h3>
                        <p>Te ofrecemos variedades de productos </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://abracadabra.cl/wp-content/uploads/2018/09/XDEU5264.jpg"
                        alt="Second slide"
                        height={500}
                    />

                    <Carousel.Caption>
                        <h3>Cupcake Paradise</h3>
                        <p>Te ofrecemos variedades de productos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.aws.nestle.recipes/resized/e89d19d331ac413811e3b1c11a893991_torta-princesa_1200_600.jpg"
                        alt="Third slide"
                        height={500}
                    />

                    <Carousel.Caption>
                        <h3>Cupcake Paradise</h3>
                        <p>
                            Te ofrecemos variedades de productos
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}

                    alt="171x180"
                    src="https://www.mendoza.gov.ar/wp-content/uploads/sites/49/2019/10/20191024_160959.jpg"
                />
                <Figure.Caption>
                    Tortas<br />
                    $1.990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://www.dulcesyregalos.com/comunes/productos/CUM07.jpg"
                />
                <Figure.Caption>
                    Tortas<br></br>
                    $1.590
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}

                    alt="171x180"
                    src="https://mascolombia.com/wp-content/uploads/2022/04/Tortas-decoradas.-Frozen.png"

                />
                <Figure.Caption>
                    Tortas<br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxy1YdKyp06jA9x7ZYYYdbPrVYAXGr6nVhLXKOhxDi8RtWvxdHBq2vO2o63rQIdJd5dU&usqp=CAU"
                />
                <Figure.Caption>
                    Tortas <br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://invitajass.com/wp-content/uploads/2019/06/tortas-de-cumpleaños-para-niñas.png"
                />
                <Figure.Caption>
                    Tortas<br />
                    $1990
                </Figure.Caption>
            </Figure>


            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombres de Productos</th>
                        <th>Valores </th>
                        <th>Agregar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Chalecos</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tortas</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Milhoja</td>
                        <td>$1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Trenzas</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Donas</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Cupcake </td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                </tbody>
            </Table>




            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Informaciones sobre nosotros</Accordion.Header>
                    <Accordion.Body>
                        Sus fundadores, Manuel y Claudia, en el momento que decidieron contraer matrimonio se dieron cuenta de la importancia que tienen los símbolos que representan al amor.

                        Así fue como Manuel, siguiendo con el oficio familiar de la joyería, creó con sus manos el anillo de compromiso con el que pediría matrimonio al amor de su vida.

                        Su intención no era dedicarse a la joyería, pero la experiencia de crear ese anillo tan especial, le hizo cambiar de idea, inspirándolo a compartir con otras parejas, este momento tan único y especial.<br />


                        * Vendemos al mayor y al detalle<br />
                        * Aceptamos todo medio de pago <br />
                        * Solo envios en RM
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Footer />
        </div>
    );
}
export default CupcakeParadise