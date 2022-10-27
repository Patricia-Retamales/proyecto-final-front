import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ComponentNabar from './ComponentNavbar';
import React, { useEffect, useState, useContext } from "react";
import Footer from "../componet/ComponenteFooter";
import { Context } from "../store/AppContext.js"
import { Link } from 'react-router-dom';



const Registro_Producto = () => {
    const { store, actions } = useContext(Context);
    const [marca, setMarca] = useState("");
    const [nombre_producto, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [url_foto, setUrlfoto] = useState("");
    const [cantidad, setCantidad] = useState("");

    useEffect(() => {
        // actions.acceso_privado()


    }, []);


    let datos_producto = {
        "vendedor": "01",
        "marca": "01",
        "nombre_producto": "nombre_producto",
        "descripcion": "descripcion",
        "precio": "precio",
        "url_foto": "url_foto"
    };

    return (




        <form style={{ backgroundImage: "linear-gradient(#d8af97, #edb8fa)" }}>

            <ComponentNabar />

            <div style={{ margin: "18%", color: "#d1052a", background: "white", height: "80%", width: "50%", borderRadius: "9px black", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black", padding: "10px", alignItems: "stretch" }}>
                <div className="row mx-5">
                    <h1 style={{ padding: "2px", textShadow: "2px 2px 5px #000000" }}>Regristrar Producto</h1>
                    <div className="wrapper" style={{ width: '50%' }}>
                        {/* store.acceso.usuario */}

                        <div className="wrapper" style={{ width: '100%' }}>
                            {/* {store.acceso.usuario} */}



                            <div className="col-md-5" style={{ position: "relative", margin: "10px",  width:"30rem"}}>
                                <label className="form-label">Nombre Producto</label>
                                <input type="NombreProducto" className="form-control"
                                    onChange={e => setNombre(e.target.value)}
                                    value={nombre_producto}
                                    id="Nombre" aria-describedby="emailHelp"
                                    placeholder="Nombre Producto" />
                            </div>

                            <div className="col-md-5" style={{ position: "relative", margin: "10px", width:"30rem"}}>
                                <label className="form-label">Descripcion</label>
                                <input type="descripcion" className="form-control"
                                    onChange={e => setDescripcion(e.target.value)}
                                    value={descripcion}
                                    id="Descripcion" aria-describedby="emailHelp"
                                    placeholder="Descripcion" />
                            </div>

                            <div className="col-md-5" style={{ position: "relative", margin: "10px", width:"15rem"}}>
                                <label className="form-label">Precio de Venta</label>
                                <input type="precio" className="form-control"
                                    onChange={e => setPrecio(e.target.value)}
                                    value={precio}
                                    id="precio" aria-describedby="emailHelp"
                                    placeholder="Precio" />
                            </div>

                            <div className="col-md-5" style={{ position: "relative", margin: "10px",width:"30rem" }}>
                                <label className="form-label">Marca</label>
                                <input type="marca" className="form-control"
                                    onChange={e => setMarca(e.target.value)}
                                    value={marca}
                                    id="precio" aria-describedby="emailHelp"
                                    placeholder="Marca" />
                            </div>

                            <div className="col-md-5" style={{ position: "relative", margin: "10px", }}>
                                <label className="form-label">Cantidad</label>
                                <input type="cantidad" className="form-control"
                                    onChange={e => setCantidad(e.target.value)}
                                    value={cantidad}
                                    id="cantidad" aria-describedby="emailHelp"
                                    placeholder="Cantdad" />
                            </div>



                            <div className="col-md-5" style={{ position: "relative", margin: "10px",  width:"30rem"}}>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label  onChange={e => setUrlfoto(e.target.value)}
                                    value={url_foto}
                                    id="url_foto" aria-describedby="emailHelp"
                                    placeholder="URL FOTO" >Multiple files input example</Form.Label>
                            <Form.Control type="file" multiple />
                            </Form.Group>
                                </div>

                                




                            <Link to="/">
                                <Button variant="primary" type="submit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        actions.crear_producto_funcion(datos_producto);

                                    }}
                                >
                                    Submit
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>


            <Footer />


        </form>
    )

}

export default Registro_Producto;

