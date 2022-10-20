
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

    useEffect(() => {
       actions.acceso_privado()


    }, []);


    let datos_producto = {
        "vendedor": "01",
        "marca": "01",
        "nombre_producto": nombre_producto,
        "descripcion": descripcion,
        "precio": precio,
        "url_foto": url_foto
    };

    return (
        <>

            <div className="wrapper" style={{ width: '50%' }}>
                {store.acceso.usuario}

                <div className="row mx-5 justify-content-center">

                    <div className="col-md-6">
                        <label className="form-label">Nombre Producto</label>
                        <input type="NombreProducto" className="form-control"
                            onChange={e => setNombre(e.target.value)}
                            value={nombre_producto}
                            id="Nombre" aria-describedby="emailHelp"
                            placeholder="Nombre Producto" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Descripcion</label>
                        <input type="descripcion" className="form-control"
                            onChange={e => setDescripcion(e.target.value)}
                            value={descripcion}
                            id="Descripcion" aria-describedby="emailHelp"
                            placeholder="Descripcion" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Precio de Venta</label>
                        <input type="precio" className="form-control"
                            onChange={e => setPrecio(e.target.value)}
                            value={precio}
                            id="precio" aria-describedby="emailHelp"
                            placeholder="Precio" />
                    </div>



                    <div className="col-md-6">
                        <label className="form-label">Foto</label>
                        <input type="Nombre" className="form-control"
                            onChange={e => setUrlfoto(e.target.value)}
                            value={url_foto}
                            id="url_foto" aria-describedby="emailHelp"
                            placeholder="URL FOTO" />
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

        </>
    )

}

export default Registro_Producto;

