
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


      <div>
        <form justify="center" style={{ width: "38rem" }}>

          <div className="mb-3">
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
              // onChange={e => setEmail(e.target.value)}
              // value={login_email}
              
          </div>

          <div>
            <label htmlFor="phone">celular</label>
            <input id="phone" type="tel" placeholder="+56" />
          </div>
          <br/>
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


