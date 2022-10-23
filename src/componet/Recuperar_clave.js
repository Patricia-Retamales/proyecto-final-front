
import Form from 'react-bootstrap/Form';
import ComponentNavbar from './ComponentNavbar';
import React, { useEffect, useState, useContext } from "react";
import Footer from "../componet/ComponenteFooter";
import { Context } from "../store/AppContext.js"
import { Link } from 'react-router-dom';

function Recuperar_Clave() {
  const { store, actions } = useContext(Context);
  const [login_email, setEmail] = useState("");
  return (

    <form>

      <ComponentNavbar />

      <Form justify="center" style={{ width: "38rem" }}>

        <div className="mb-3">
          <label className="form-label">Ingresa tu correo</label>
          <input type="email" className="form-control"
            onChange={e => setEmail(e.target.value)}
            value={login_email}
            id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="email@e-mail.com" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <Link to="/">
          <button type="submit" className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              actions.recuperar_clave_funcion(login_email);


            }} >
            Submit
          </button>
        </Link>

        
        <Form.Label htmlFor="inputPassword5">Ingresar pin</Form.Label>
        <div style={{ width: "40%", display: "flex", justifyContent: "space-between" , }}>
          <Form.Control style={{right:"20px"}}
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
         
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </div>

     
      </Form>


      <div>
        <form justify="center" style={{ width: "38rem" }}>
          
          <div className="mb-3">
            <label className="form-label">Ingresa tu correo</label>
            <input type="email" className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={login_email}
              id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="email@e-mail.com" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <Link to="/cambiar_clave">
            <button type="submit" className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                actions.recuperar_clave_funcion(login_email);


              }} >
              Submit
            </button>
          </Link>
        </form>
      </div>


        <Footer />
    </form >

  );
}

export default Recuperar_Clave;


