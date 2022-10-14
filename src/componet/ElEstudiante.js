import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';



const ElEstudiante = () => {
    return (
        <div className='semillas' style={{background:'#ffffec'}}>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://florence.cl/wp-content/uploads/2022/01/Utiles-escolares.jpg"
                        alt="First slide"
                        height={500}
                    />
                    <Carousel.Caption>
                        <h3>El Estudinate 24/7</h3>
                        <p>Te ofrecemos variedades de productos </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.bonosdelgobierno.com/wp-content/uploads/2017/01/05130103/utiles-escolares.jpg"
                        alt="Second slide"
                        height={500}
                    />

                    <Carousel.Caption>
                        <h3>El Estudinate 24/7</h3>
                        <p>Te ofrecemos variedades de productos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fweb.escuelasanjoseobrero.cl%2Flistas-de-utiles-escolares%2F&psig=AOvVaw07TfhdnbeF-NcBznO_2IW8&ust=1665790037674000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKijtc2t3voCFQAAAAAdAAAAABAO"
                        alt="Third slide"
                        height={500}
                    />

                    <Carousel.Caption>
                        <h3>El Estudinate 24/7</h3>
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
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pumahue.cl%2Ftemuco%2Frecepcion-de-utiles-escolares%2F&psig=AOvVaw3RubPKpVGvtX5zD2FL9po2&ust=1665790252929000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNi8lrSu3voCFQAAAAAdAAAAABAE"
                />
                <Figure.Caption>
                    Lapices<br/>
                    $1.990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://www.torre.cl/wp-content/uploads/2021/12/tipos-de-hoja-cuadernos.jpg"
                />
                <Figure.Caption>
                    Cuadernos<br></br>
                    $1.590
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}

                    alt="171x180"
                    src="https://www.latala.cl/wp-content/uploads/2020/08/PAPEL-LUSTRE-ARTEL.jpg"

                />
                <Figure.Caption>
                    Cartulinas<br></br>
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
                    src="https://cdnx.jumpseller.com/librerias-blue-mix/image/19179199/resize/640/500?1656445026"
                />
                <Figure.Caption>
                stick fix<br/>
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
                        <td>calculadora</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Cuadernos</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Lapices</td>
                        <td>$1990</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>papel lustre</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Lapiz Mina</td>
                        <td>$ 1990</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Corrector </td>
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
export default ElEstudiante