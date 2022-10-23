import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";

import { FcLike } from "react-icons/fc";
import { Context } from "../store/AppContext";
import React, { useContext, useState } from 'react';


function ElEstudiante() {
    const { store, actions } = useContext(Context);
    let estudiante = store.productos.filter(producto => producto.marca === "06");
    console.log(estudiante);
    const [productos, setProductos] = useState(estudiante);

    console.log("productos estudiante", productos);
    function addLink(id_producto) {
        console.log("productos estudiante", productos);
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
                        src="https://florence.cl/wp-content/uploads/2022/01/Utiles-escolares.jpg"
                        alt="First slide"
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
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
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
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
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
                    />

                    <Carousel.Caption>
                        <h3>El Estudinate 24/7</h3>
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

            <Footer />
        </div>
    );
}
export default ElEstudiante;