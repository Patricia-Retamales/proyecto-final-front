import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";



const LaTiendita = () => {
    return (
        <div className='semillas' style={{ background: '#ffffec' }}>
            
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.esdesignbarcelona.com/sites/default/files/imagenes/haz-crecer-tu-marca-de-ropa-frente-la-competencia_1.jpg"
                        alt="First slide"
                        height={500}
                    />
                    <Carousel.Caption>
                        <h3>La Tiendita</h3>
                        <p>Te ofrecemos variedades de productos </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.hogarmania.com/archivos/201911/ropa-listado-belleza-848x477x80xX.jpg"
                        alt="Second slide"
                        height={500}
                    />

                    <Carousel.Caption>
                        <h3>La Tiendita</h3>
                        <p>Te ofrecemos variedades de productos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://blog.oxfamintermon.org/wp-content/uploads/2017/03/iStock-500395950.jpg"
                        alt="Third slide"
                        height={500}
                    />

                    <Carousel.Caption>
                        <h3>La Tiendita</h3>
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
                    src="https://i.pinimg.com/736x/7f/47/f7/7f47f7cf94601d5ee87c1192e0bd492c.jpg"
                />
                <Figure.Caption>
                    Conjuntos<br />
                    $1.990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://http2.mlstatic.com/D_NQ_NP_787221-MLC49436145703_032022-W.jpg"
                />
                <Figure.Caption>
                    Pulceras<br></br>
                    $1.590
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}

                    alt="171x180"
                    src="https://www.chilepromo.cl/3056-large_default/polera-con-cuello-para-mujer-poliester.jpg"

                />
                <Figure.Caption>
                    Poleras<br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://media.vozpopuli.com/2020/03/ZARA-Pantalon-PVP-BERSHKA-Supernenas_1335176561_14804356_660x371.jpg"
                />
                <Figure.Caption>
                    Pantalon <br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://cf.shopee.cl/file/be52ba9190a403047c0e0b3d0f79ebae"
                />
                <Figure.Caption>
                    Vestidos<br />
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
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Poleras</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pantalones</td>
                        <td>$1990</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Calzas</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Chaquetas</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Vestidos </td>
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
        

        </div>
    );
}
export default LaTiendita;