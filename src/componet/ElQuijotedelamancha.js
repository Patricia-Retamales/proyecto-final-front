import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';

import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import ComponentNabar from './ComponentNavbar';
import Footer from "../componet/ComponenteFooter";

import { FcLike } from "react-icons/fc";
import { Context } from "../store/AppContext";
import React, { useContext, useState } from 'react';



const ElQuijotedelaMancha = () => {
    const { store, actions } = useContext(Context);
    let Mancha = store.productos.filter(producto => producto.marca === "07");
    console.log(Mancha);
    const [productos, setProductos] = useState(Mancha);

    console.log("productos Mancha", productos);
    function addLink(id_producto) {
        console.log("productos Mancha", productos);
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