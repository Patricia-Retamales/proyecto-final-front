import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ComponentNabar from './ComponentNavbar';
import { Context } from "../store/AppContext.js"
import React, { useEffect, useState, useContext } from "react";
import Footer from "../componet/ComponenteFooter";

function Registration() {
  const { store, actions } = useContext(Context);
  const [signup_email, setEmail] = useState("");
  const [signup_password, setPassword] = useState("");
  const [signup_username, setUsername] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [marca, setMarca] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tipo_pago, setTipo_pago] = useState("");
  const [banco, setBanco] = useState("");
  const [tipo_cuenta, setTipo_cuenta] = useState("");
  const [numero_cuenta, setNumero_cuenta] = useState("");

  let datos_registro = {
    "email": signup_email,
    "password": signup_password,
    "is_active": "True",
    "username": signup_username,
    "nombre": nombre,
    "apellido": apellido,
    "rut": rut,
    "nombre_marca": marca,
    "descripcion": descripcion,
    "direccion": direccion,
    "tipo_pago": tipo_pago,
    "banco_cuenta": banco,
    "tipo_cuenta": tipo_cuenta,
    "numero_cuenta": numero_cuenta
  }

  return (

    <Form style={{ backgroundImage: "linear-gradient(#d8af97, #edb8fa)",  height:"50%"}}>
      <ComponentNabar/>
     
      <div style={{ margin: "18%", color: "#d1052a", background: "white", height: "80%", width: "50%", borderRadius: "9px black", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black", padding: "10px", alignItems: "stretch" }}>
        <div className="row mx-5">
          <h1 style={{ padding: "2px", textShadow: "2px 2px 5px #000000" }}>Regristrar</h1>

          <div className="col-md-5" style={{ position: "relative", margin: "10px", }}>
            <label className="form-label">Nombre</label>
            <input type="Nombre" className="form-control"
              onChange={e => setNombre(e.target.value)}
              value={nombre}
              id="Nombre" aria-describedby="emailHelp"
              placeholder="Nombre" />
          </div>

          <div className="col-md-5" style={{ position: "relative", margin: "10px", }}>
            <label className="form-label">Apellido</label>
            <input type="Nombre" className="form-control"
              onChange={e => setApellido(e.target.value)}
              value={apellido}
              id="Apellido" aria-describedby="emailHelp"
              placeholder="Apellido" />
          </div>

          <div className="col-md-5" style={{ position: "relative", margin: "10px", }}>
            <label className="form-label">Nombre de Usuario</label>
            <input type="username" className="form-control"
              onChange={e => setUsername(e.target.value)}
              value={signup_username}
              id="username" aria-describedby="emailHelp"
              placeholder="Username" />
          </div>



          <div className="col-md-5" style={{ position: "relative", margin: "10px", }}>
            <label className="form-label">Email</label>
            <input type="Nombre" className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={signup_email}
              id="email" aria-describedby="emailHelp"
              placeholder="email@ejemplo.cl" />
          </div>

          <div className="col-md-5" style={{ position: "relative", margin: "10px", }}>
            <label className="form-label">Repetir Email</label>
            <input type="Nombre" className="form-control"
              id="repetir_email" aria-describedby="emailHelp"
              placeholder="email@ejemplo.cl" />
          </div>

          <div className="col-md-5" style={{ position: "relative", margin: "10px", }}>
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control"
              onChange={e => setPassword(e.target.value)}
              value={signup_password}
              id="password" aria-describedby="emailHelp"
              placeholder="password" />
          </div>


          <div className="col-md-5" style={{ position: "relative", margin: "10px", }}>
            <label className="form-label">Repetir Contraseña</label>
            <input type="password" className="form-control"
              id="repeat_password" aria-describedby="emailHelp"
              placeholder="password" />
          </div>


          <h1 style={{ padding: "2px", textShadow: "2px 2px 5px #000000" }}>Datos de tu marca</h1>
         

          <div className="col-md-6">
            <label className="form-label">Nombre de la marca</label>
            <input type="marca" className="form-control"
              onChange={e => setMarca(e.target.value)}
              value={marca}
              id="marca" aria-describedby="marca"
              placeholder="marca" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Breve descripción de lo que vendes</label>
            <input type="RUT" className="form-control"
              onChange={e => setDescripcion(e.target.value)}
              value={descripcion}
              id="Descripcion" aria-describedby="emailHelp"
              placeholder="Descripcion" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Dirección de la tienda / lugar de retiro</label>
            <input type="direccion" className="form-control"
              onChange={e => setDireccion(e.target.value)}
              value={direccion}
              id="direccion" aria-describedby="emailHelp"
              placeholder="Direccion" />
          </div>


          /**Aca poner un dropdown */

          <div className="col-md-6">
            <label className="form-label">Tipo de Pago preferido</label>
            <input type="tipo_pago" className="form-control"
              onChange={e => setTipo_pago(e.target.value)}
              value={tipo_pago}
              id="tipo_pago" aria-describedby="emailHelp"
              placeholder="Transferencia / Efectivo" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Banco para depósito</label>
            <input type="banco" className="form-control"
              onChange={e => setBanco(e.target.value)}
              value={banco}
              id="banco" aria-describedby="emailHelp"
              placeholder="Banco" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Tipo de Cuenta</label>
            <input type="tipo_cuenta" className="form-control"
              onChange={e => setTipo_cuenta(e.target.value)}
              value={tipo_cuenta}
              id="direccion" aria-describedby="emailHelp"
              placeholder="Tipo de Cuenta" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Numero de cuenta para transferencia</label>
            <input type="nro_cuenta" className="form-control"
              onChange={e => setNumero_cuenta(e.target.value)}
              value={numero_cuenta}
              id="numero_cuenta" aria-describedby="emailHelp"
              placeholder="Numero de Cuenta" />
          </div>

          <div className="col-md-6">
            <label className="form-label">RUT</label>
            <input type="RUT" className="form-control"
              onChange={e => setRut(e.target.value)}
              value={rut}
              id="RUT" aria-describedby="emailHelp"
              placeholder="RUT" />
          </div>

          <Link to="/">
            <Button variant="outline-secondary" style={{ width: "32rem", position: "static", margin: "10px", justifyContent: "center" }} type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log(datos_registro);
                actions.registro_funcion(datos_registro);

              }}
            >
              Submit
            </Button>
          </Link>

        </div>

      </div>
      <Footer/>
    </Form>
  )
}

export default Registration;
