import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";
import { FcLike } from "react-icons/fc";

import { Context } from "../store/AppContext";
import React, { useContext } from 'react';


const BellaPandora = (props) => {
    const { store, actions } = useContext(Context);

    console.log("ComponetVehicles props", props);

    function addLink(id) {
        const favorite = props.bellaPandora.filter(fav => {
            console.log("uid", fav.uid);
            if (fav.uid == id) {
                return fav;
            }
        });
        const name = favorite[0].name;
        actions.addFavorite(name);
    }


    return (

        <div className='semillas' style={{background:'#ffffec'}}>
         <ComponentNabar/>
         <br/>
         
            <Carousel slide={false}>
                <Carousel.Item  style={{borderRadius:"50px"}}>
                    <img
                        className="d-block w-100"
                        src="https://media.glamour.mx/photos/6190a765a6e030d648101a97/master/w_1600%2Cc_limit/173437.jpg"
                        alt="First slide"
                        height={350}
                        style={{objectFit:"cover", borderRadius:"50px",  border:"#fdfd96 5px solid"}}
                    />
                    <Carousel.Caption>
                        <h3>Bella Pandora</h3>
                        <p>Te ofrecemos variedades de productos </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.abc.es/media/estilo/2021/05/07/apertura-joyas-small-ku5B--1248x698@abc.jpg"
                        alt="Second slide"
                        height={350}
                        style={{objectFit:"cover", borderRadius:"50px",  border:"#fdfd96 5px solid"}}
                    />

                    <Carousel.Caption>
                        <h3>Bella Pandora</h3>
                        <p>Te ofrecemos variedades de productos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://boutiquebellariel.cl/1/storage_21239-Tocona-8pcs-juegos-hueco-anillos-para-las-mujeres-los/cdn.jpg"
                        alt="Third slide"
                        height={350}
                        style={{objectFit:"cover", borderRadius:"50px",  border:"#fdfd96 5px solid"}}
                    />

                    <Carousel.Caption>
                        <h3>Bella Pandora</h3>
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
                    src="https://falabella.scene7.com/is/image/Falabella/110436121_1?wid=800&hei=800&qlt=70"
                />
                <Figure.Caption>
                    Aros<br/>
                    $1.990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://i.pinimg.com/originals/43/3a/26/433a2696cab0e5c0eaab5e10ce4e5563.jpg"
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
                    src="https://static.sammit.cl/15928/cadena-grumet-130716-1024.jpg"

                />
                <Figure.Caption>
                    Cadenas<br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dwee8477e7/images/imagenes-productos/800/MKN9/MKN9VOPXRS-001.jpg?sw=320&sh=409&sm=fit"
                />
                <Figure.Caption>
                    Anillos<br></br>
                    $1990
                </Figure.Caption>
            </Figure>

            <Figure style={{ margin: '50px' }}>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="https://ae01.alicdn.com/kf/Hfea8f71b004e44e097b168ae70a6ebb7V/1-2-3-unids-set-tobilleras-mujer-acero-inoxidable-joyeria-mujer-joyas-de-playa.jpg_Q90.jpg_.webp"
                />
                <Figure.Caption>
                Tobilleras<br/>
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
                        <td>Anillos</td>
                        <td>$ 1990</td>
                       <td> <button ><FcLike/></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Pulseras</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike/></button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Aros</td>
                        <td>$1990</td>
                        <td><button ><FcLike/></button></td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Cadenas</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike/></button></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Tobilleras</td>
                        <td>$ 1990</td>
                        <td><button ><FcLike/></button></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Pircing </td>
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
export default BellaPandora;