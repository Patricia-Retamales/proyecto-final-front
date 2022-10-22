import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";

import { FcLike } from "react-icons/fc";


const  SaborDivino = () => {
    return (
        <div className='semillas' style={{background:'#ffffec'}}>
<ComponentNabar/>
<br/>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/b/chocolates-hechos-mano-con-diferentes-sabores-y-formas-artesanales-185294147.jpg"
                        alt="First slide"
                        height={350}
                        style={{objectFit:"cover", borderRadius:"50px",  border:"#fdfd96 5px solid"}}
                    />
                    <Carousel.Caption>
                        <h3>Sabor Divino</h3>
                        <p>Te ofrecemos variedades de productos </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/z/chocolates-con-diversas-formas-85831853.jpg"
                        alt="Second slide"
                        height={350}
                        style={{objectFit:"cover", borderRadius:"50px",  border:"#fdfd96 5px solid"}}
                    />

                    <Carousel.Caption>
                        <h3>Sabor Divino</h3>
                        <p>Te ofrecemos variedades de productos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqLS-F0oLXBCpC3woEbazWLe5etzFXG7G-g&usqp=CAU"
                        alt="Third slide"
                        height={350}
                        style={{objectFit:"cover", borderRadius:"50px",  border:"#fdfd96 5px solid"}}
                    />

                    <Carousel.Caption>
                        <h3>Sabor Divino</h3>
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
                    src="https://i0.wp.com/www.johfrej.com/wp-content/uploads/2021/04/tortugas-de-chocolate-johfrej-cv.png?fit=700%2C467&ssl=1"
                />
                <Figure.Caption>
                    Chocolate<br/>
                    $1.990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlRzggYQQ0NNlauxzcm726WIfl3ezjIeVtQ&usqp=CAU"
                />
                <Figure.Caption>
                    Corazon chocolatozo<br></br>
                    $1.590
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}

                    alt="171x180"
                    src="https://www.mendoza.gov.ar/wp-content/uploads/sites/49/2016/06/choco.jpg"

                />
                <Figure.Caption>
                    Regalitos de Amor<br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://img.freepik.com/fotos-premium/composicion-sobre-fondo-madera-negra-chocolates-artesanales-al-estilo-raffaello-productos-naturales-organicos_200577-76.jpg"
                />
                <Figure.Caption>
                    Cajitas <br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="http://innatia.info/images/galeria/chocolate-5.jpg"
                />
                <Figure.Caption>
                100% Cacao<br/>
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
                        <td>chocolate rellenos</td>
                        <td><button ><FcLike/></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Corazones de chocolate</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike/></button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>BomBones</td>
                        <td>$1990</td>
                        <td><button ><FcLike/></button></td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>chocolates</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike/></button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Bombones rellenos</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike/></button></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Dulce de leche </td>
                        <td>$ 1990</td>
                        <td><button ><FcLike/></button></td>
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
export default SaborDivino