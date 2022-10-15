import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ComponentNabar from './ComponentNavbar';
import { Context } from "../store/AppContext.js"
import React, { useEffect, useState, useContext } from "react";

function Registration() {
  const { store, actions } = useContext(Context);
  const [signup_email, setEmail] = useState("");
  const [signup_password, setPassword] = useState("");
  const [signup_username, setUsername] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");


  let datos_registro = {
    "email": signup_email,
    "password": signup_password,
    "is_active": "True",
    "username": signup_username,
    "nombre": nombre,
    "apellido": apellido,
    "rut": rut
  }

  return (
    <Form>
      <ComponentNabar />
      <div>
        <div className="row mx-5">

          <div className="col-md-6">
            <label className="form-label">Nombre</label>
            <input type="Nombre" className="form-control"
              onChange={e => setNombre(e.target.value)}
              value={nombre}
              id="Nombre" aria-describedby="emailHelp"
              placeholder="Nombre" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Apellido</label>
            <input type="Nombre" className="form-control"
              onChange={e => setApellido(e.target.value)}
              value={apellido}
              id="Apellido" aria-describedby="emailHelp"
              placeholder="Apellido" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Nombre de Usuario</label>
            <input type="username" className="form-control"
              onChange={e => setUsername(e.target.value)}
              value={signup_username}
              id="username" aria-describedby="emailHelp"
              placeholder="Username" />
          </div>



          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="Nombre" className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={signup_email}
              id="email" aria-describedby="emailHelp"
              placeholder="email@ejemplo.cl" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Repetir Email</label>
            <input type="Nombre" className="form-control"
              id="repetir_email" aria-describedby="emailHelp"
              placeholder="email@ejemplo.cl" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control"
              onChange={e => setPassword(e.target.value)}
              value={signup_password}
              id="password" aria-describedby="emailHelp"
              placeholder="password" />
          </div>


          <div className="col-md-6">
            <label className="form-label">Repetir Contraseña</label>
            <input type="password" className="form-control"

              id="repeat_password" aria-describedby="emailHelp"
              placeholder="password" />
          </div>

          <div className="col-md-6">
            <label className="form-label">RUT</label>
            <input type="RUT" className="form-control"
              onChange={e => setRut(e.target.value)}
              value={rut}
              id="RUT" aria-describedby="emailHelp"
              placeholder="RUT" />
          </div>




          <Link to="/Home">
            <Button variant="primary" type="submit"
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

    </Form>

  );
}

export default Registration;