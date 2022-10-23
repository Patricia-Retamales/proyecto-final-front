import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";

import { FcLike } from "react-icons/fc";
import { Context } from "../store/AppContext";
import React, { useContext, useState } from 'react';

const Marcas = () => {

    const { store, actions } = useContext(Context);
    let semilla = store.productos.filter(producto => producto.marca === "09");
    console.log(semilla);
    const [productos, setProductos] = useState(semilla);

    console.log("productos semilla", productos);
    function addLink(id_producto) {
        console.log("productos semilla", productos);
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
                        src="https://i.blogs.es/13d967/1366_20001/1366_2000.jpg"
                        alt="First slide"
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
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
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
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
                        height={350}
                        style={{ objectFit: "cover", borderRadius: "50px", border: "#fdfd96 5px solid" }}
                    />

                    <Carousel.Caption>
                        <h3>El jardin Mistico</h3>
                        <p>
                            Te ofrecemos variedades de Semillas
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