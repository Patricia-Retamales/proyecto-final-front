
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





      <div justify="center" style={{ width: "38rem" }}>
       

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
=======
    <Form  style={{ backgroundImage: "linear-gradient(#d8af97, #edb8fa)" }}>
      <ComponentNavbar />
      <div style={{ margin: "18%", color: "#d1052a", background: "white", height: "80%", width: "50%", borderRadius: "9px black", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black", padding: "10px", alignItems: "stretch" }}>
        <h1 style={{ padding: "2px", textShadow: "2px 2px 5px #000000" }}>Cambio de clave</h1>
        <form justify="center" style={{ width: "38rem" }}>


          <div className="mb-3" style={{ width: "25rem", }}>

            <label className="form-label">Ingresa tu correo</label>
            <input type="email" className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={login_email}
              id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="email@e-mail.com" />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div style={{ margin: "10px" }}>
            <label htmlFor="phone">Teléfono móvil</label>
            <br />
            <input id="phone" type="tel" aria-describedby="phoneHelp" placeholder="+569" />
          </div>
          <br />

          <div style={{ margin: "10px" }}>
            <label htmlFor="clave">incresa tu clave </label>
            <br />
            <input id="clave" type="text" placeholder="ingresa tu clave" />
          </div>
          <br />
          <br />

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



      </div >
      <Footer />
    </form >

  );
}

export default Recuperar_Clave;


