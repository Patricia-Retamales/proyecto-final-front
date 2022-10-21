import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";

import { FcLike } from "react-icons/fc";


const Marcas = () => {
    return (
        <div className='semillas' style={{ background: '#ffffec' }}>
<ComponentNabar/>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.blogs.es/13d967/1366_20001/1366_2000.jpg"
                        alt="First slide"
                        height={500}
                    />
                    <Carousel.Caption>
                        <h3>El jardin Mistico</h3>
                        <p>Te ofrecemos variedades de Semillas</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.eluniversal.com.mx/sites/default/files/2021/05/17/munara_ciclo_de_semillas_portada.jpg"
                        alt="Second slide"
                        height={500}
                    />

                    <Carousel.Caption>
                        <h3>El jardin Mistico</h3>
                        <p>Te ofrecemos variedades de Semillas</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/z/venta-de-semillas-envasadas-en-el-almacén-para-jardinero-minsk-belarus-junio-189021275.jpg"
                        alt="Third slide"
                        height={500}
                    />

                    <Carousel.Caption>
                        <h3>El jardin Mistico</h3>
                        <p>
                            Te ofrecemos variedades de Semillas
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}

                    alt="171x180"
                    src="https://jumbo.vtexassets.com/arquivos/ids/325530-360-360?width=360&height=360&aspect=true"
                />
                <Figure.Caption>
                    Semilla Zapallo<br></br>
                    $1.990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/839/794/products/semillas-de-lino1-398dad853a54d9533516313012782087-1024-1024.png"
                />
                <Figure.Caption>
                    Semilla Lino<br></br>
                    $1.590
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}

                    alt="171x180"
                    src="https://floramedia.es/wp-content/uploads/2021/07/sobres-de-semillas-floramedia.jpg"

                />
                <Figure.Caption>
                    Semillas varidad<br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://cdn.shopify.com/s/files/1/0293/8952/0975/products/4195_600x.jpg?v=1629944171"
                />
                <Figure.Caption>
                    Linaza<br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://aldeanativa.cl/wp-content/uploads/1d1a0eb0-5159-4459-8cb0-6125afdfa455-606110105309-semillas-de-sesamo-negro-125gr-positiv-1.jpeg"
                />
                <Figure.Caption>
                    Sesamo Negro<br></br>
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
                        <td>semillas de Zapallo</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Semillas de Girasol</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Semillas de Linaza</td>
                        <td>$1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>semillas de Zapallo</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Semillas de Girasol</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Semillas de Linaza</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                </tbody>
            </Table>




            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Informaciones sobre nosotros</Accordion.Header>
                    <Accordion.Body>
                        Encuentra todo lo que buscas en venta de semillas hortalizas y flores, y si requieres más que semillas, contamos también con Tierras , Semillas y fertilizantes al mejor precio. Visita huertosalma.cl y conoce nuestra gran variedad.

                        Encuentra las semillas para germinar plantas más GRANDES y FUERTES, aquí en nuestra tienda, realiza tu compra de forma segura. Realizamos la venta de semillas de hortalizas al detalle o semillas a granel, también contamos con semillas orgánicas.

                        Las semillas deben plantarse en tierra húmeda.  Contamos con las mejores y más amplia variedad de semillas tipos y tamaños. Las mejores semillas de hortalizas y flores las encuentra en Huertos Alma.

                        Disponemos de espectaculares variedades, Consiga las mejores semillas de Chile! Elija entre una amplia selección de variedades superiores y de gran calidad.

                        Regalos ecológicos y sustentables en Santiago y todo Chile, Regala vida en lugar de objetos tóxicos.

                        Contamos con la mejor colección de semillas. Aquí encontrarás todo lo que necesitas saber sobre las mejores semillas, Tenemos la mayor variedad de semillas en Santiago con envío a todo Chile. Gran precio y calidad.

                        Pueden ser plantadas desde un huerto caso, una mesa de cultivo, o en cualquier parte que cumpla con las condiciones de germinación de las semillas. Son ideales para hacer almácigo, tienen un gran porcentaje de germinación y algunas no tienen ningún tratamiento, de ningún tipo<br />


                        * vendemos al mayor y al detalle<br />
                        * aceptamos todo medio de pago <br />
                        * solo envios en RM
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Footer />
        </div>
    );
}
export default Marcas