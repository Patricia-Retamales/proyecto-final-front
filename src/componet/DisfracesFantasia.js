import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";

const DisfracesFantasia = () => {
    return (
        <div className='semillas' style={{ background: '#ffffec' }}>
            <ComponentNabar/>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://arcoirisjugueteria.cl/wp-content/uploads/2020/12/AMAN-C00101-1.jpg"
                        alt="First slide"
                        height={500}
                    />
                    <Carousel.Caption>
                        <h3>Disfraces Fantasía</h3>
                        <p>Te ofrecemos variedades de productos </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static1.funidelia.com/img/fr_landing_block/funidelia6/landings/20210908_LANDING_3COLS_DISFRACES_HALLOWEEN.jpg"
                        alt="Second slide"
                        height={500}
                    />

                    <Carousel.Caption>
                        <h3>Disfraces Fantasía</h3>
                        <p>Te ofrecemos variedades de productos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://prensaeventos.cl/wp-content/uploads/2017/10/El-mejor-dato-de-Meiggs-para-comprar-disfraces-y-disfrutar-Halloween.jpg"
                        alt="Third slide"
                        height={500}
                    />

                    <Carousel.Caption>
                        <h3>Disfraces Fantasía</h3>
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
                    src="https://cf.shopee.cl/file/71a14371ee395e416a4233684ca8795e"
                />
                <Figure.Caption>
                    Salchicha<br />
                    $1.990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://static1.mujerhoy.com/www/multimedia/201910/28/media/cortadas/disfraces-halloween-baratos-primark-14-k1D--739x555@MujerHoy.jpg"
                />
                <Figure.Caption>
                    Calabaza<br></br>
                    $1.590
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}

                    alt="171x180"
                    src="https://static.guiainfantil.com/media/2788/blobid0.jpg"

                />
                <Figure.Caption>
                    Fantasma<br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://www.dondisfraz.com/media/catalog/product/cache/1b7efd9c23603a41861e943185fdf7f2/d/i/disfraz-de-diablesa-presumida-para-nina.jpg.jpg"
                />
                <Figure.Caption>
                    Diablita <br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://www.hola.com/imagenes/seleccion/20211006197191/mejores-disfraces-halloween-para-ninos/1-6-682/baby-joda-z.jpg"
                />
                <Figure.Caption>
                    Baby Yoda<br />
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
                        <td>spiderman</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tarzan</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Sirenita</td>
                        <td>$1990</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Gato Cosmico</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Minnion</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Perrito </td>
                        <td>$ 1990</td>
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

            <Footer/>
        </div>
    );
}
export default DisfracesFantasia

