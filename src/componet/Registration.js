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
  const [apelldo, setApellidod] = useState("");
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");


  let datos_registro = {
    "email": "",
    "password": "",
    "is_active": "True",
    "username": "",
    "nombre": "",
    "apellido": "",
    "rut": 1
  }

  return (
    <Form>
      <ComponentNabar />

      <div className="row mx-5">

        <div className="col-md-6">
          <p>Nombre</p>
          <Form.Control placeholder=" Nombre" />
        </div>

        <div className="col-md-6">
          <p>Apellido</p>
          <Form.Control placeholder="Apellido"  />
        </div>

        <div className=" col-md-6" controlId="formGridAddress2">
          <Form.Label>Rut</Form.Label>
          <Form.Control placeholder="1234567-8" />
        </div>

        <div className="col-md-6" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </div>
        <div className="col-md-6" controlId="formGridEmail">
          <Form.Label>RepeatEmail</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </div>
        <div className="col-md-6" controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </div>
        <div className="col-md-6" controlId="formGridPassword">
          <Form.Label>RepeatPassword</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </div>


        <div className="col-md-6" controlId="formGridAddress1">
          <Form.Label>direccion</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </div>

        <div className="col-md-6" controlId="formGridAddress2">
          <Form.Label>casa o depto</Form.Label>
          <Form.Control placeholder="casa o depto" />
        </div>


        <div className="col-md-6" controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </div>

        <div className="col-md-6" controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Region Metropolitana</option>
          </Form.Select>
        </div>

        <div className="col-md-6" controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </div>
        <Link to="/Home">
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Link>
      </div>


    </Form>

  );
}

export default Registration;