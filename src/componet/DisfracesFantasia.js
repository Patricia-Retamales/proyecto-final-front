import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";

import { FcLike } from "react-icons/fc";
import { Context } from "../store/AppContext";
import React, { useContext, useState } from 'react';


const DisfracesFantasia = () => {

    const { store, actions } = useContext(Context);
    let disfraces = store.productos.filter(producto => producto.marca === "05");
    console.log(disfraces);
    const [productos, setProductos] = useState(disfraces);

    console.log("productos disfraces", productos);
    function addLink(id_producto) {
        console.log("productos disfraces", productos);
        const favorite = productos.filter(fav => {
            console.log("id_producto", fav);
            if (fav.id == id_producto) {
                return fav;
            }
        });
        const name = favorite[0].nombre_producto;
        actions.addFavorite(name);
    }
    return (
        <div className='semillas' style={{ background: '#ffffec' }}>
            <ComponentNabar />
            <br />
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://arcoirisjugueteria.cl/wp-content/uploads/2020/12/AMAN-C00101-1.jpg"
                        alt="First slide"
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
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
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
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
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
                    />

                    <Carousel.Caption>
                        <h3>Disfraces Fantasía</h3>
                        <p>
                            Te ofrecemos variedades de productos
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {productos.map((producto, index) => {
                return (
                    <Figure style={{ margin: '50px' }}>
                        <Figure.Image
                            width={171}
                            height={180}

                            alt="171x180"
                            src={producto.url_foto}
                        />
                        <Figure.Caption>
                            {producto.nombre_producto}<br />
                            {producto.precio}
                        </Figure.Caption>
                    </Figure>

                )
            })}
            


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
                {productos.map((producto,index) =>{
                        return(
                            <tr>
                            <td>{producto.id}</td>
                            <td>{producto.nombre_producto}</td>
                            <td>$ {producto.precio}</td>
                            <td><button onClick={() => addLink(producto.id)}><FcLike /></button></td>
                        </tr>
                        )
                    })}
                   
                    
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
export default DisfracesFantasia

