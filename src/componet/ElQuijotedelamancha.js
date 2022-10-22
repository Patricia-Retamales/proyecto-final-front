import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";

import { FcLike } from "react-icons/fc";



const ElQuijotedelaMancha = () => {
    return (
        <div className='semillas' style={{ background: '#ffffec' }}>

            <ComponentNabar />
            <br />
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.wixstatic.com/media/8dd0c1_15a1f40bfda947849713aaa8eeb64910~mv2.png/v1/fill/w_538,h_302,al_c,lg_1/8dd0c1_15a1f40bfda947849713aaa8eeb64910~mv2.png"
                        alt="First slide"
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
                    />
                    <Carousel.Caption>
                        <h3>El Quijote de la Mancha</h3>
                        <p>Te ofrecemos variedades de productos de limpieza</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://productos.webcindario.com/img/Aseo%203.jpg"
                        alt="Second slide"
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
                    />

                    <Carousel.Caption>
                        <h3>El Quijote de la Mancha</h3>
                        <p>Te ofrecemos variedades de Semillas</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://klimper.cl/wp-content/uploads/2018/08/Limpieza-Todos-Klimper.png"
                        alt="Third slide"
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
                    />

                    <Carousel.Caption>
                        <h3>El Quijote de la Mancha</h3>
                        <p>
                            Te ofrecemos variedades de productos de limpieza
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}

                    alt="171x180"
                    src="https://magnomayorista.cl/wp-content/uploads/2021/05/1002997-magno-cloro-gel-lavanda-900cc-2.jpg"
                />
                <Figure.Caption>
                    Cloro Gel<br />
                    $1.990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://cdnx.jumpseller.com/ofimaster/image/17832677/resize/540/540?1645018925"
                />
                <Figure.Caption>
                    Limpia Vidrios<br></br>
                    $1.590
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}

                    alt="171x180"
                    src="https://cdn.dimerc.cl/media/catalog/product/cache/1/thumbnail/x600/040ec09b1e35df139433887a97daa66f/0/4/04c1719100cbc17f6a07280eec4ff27f.jpg"

                />
                <Figure.Caption>
                    Poett<br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://dojiw2m9tvv09.cloudfront.net/42730/product/7805000317317-detergentes-detergente-omo-matic-2-7kg-puntobarato1184.jpg"
                />
                <Figure.Caption>
                    Omo<br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://dojiw2m9tvv09.cloudfront.net/42730/product/7506195143834-suavizantes-suavizante-downy-concentrado-500ml-puntobarato3944.jpg"
                />
                <Figure.Caption>
                    suavizante downy<br />
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
                        <td>Poett</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Suavizante</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Cloro Gel</td>
                        <td>$1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Limpia Vidrios</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Omo</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Cloro</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike /></button></td>
                    </tr>
                </tbody>
            </Table>




            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Informaciones sobre nosotros</Accordion.Header>
                    <Accordion.Body>
                        El Quijote de la Mancha produce y comercializa detergentes y desinfectantes industriales con el compromiso esencial de promover la satisfacción de sus clientes a través de la revisión constante de sus procesos, en la búsqueda de oportunidades de mejora y desarrollo, entregando soluciones integrales a los procesos de limpieza e higiene.

                        El Quijote de la Mancha ha logrado crecer en forma sostenida, aumentando sus ventas y posición en el mercado gracias al constante apoyo y compromiso con sus clientes, para ello cuenta con un equipo profesional de ventas especializado en las distintas áreas del quehacer industrial y agropecuario, entregando un servicio técnico-comercial que marca una clara diferencia en la gestión y apoyo de clientes.

                        El posicionamiento alcanzado por la empresa se mantiene gracias a una adecuada, excelente y oportuna respuesta del área productiva y técnica, dedicada al desarrollo de nuevos y mejores productos.<br />


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
export default ElQuijotedelaMancha