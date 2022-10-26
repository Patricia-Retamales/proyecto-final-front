
import Form from 'react-bootstrap/Form';
import ComponentNavbar from './ComponentNavbar';
import React, { useEffect, useState, useContext } from "react";
import Footer from "../componet/ComponenteFooter";
import { Context } from "../store/AppContext.js"
import { Link } from 'react-router-dom';

function Recuperar_Clave() {
  const { store, actions } = useContext(Context);
  const [login_email, setEmail] = useState("");
  const [telefono, setTelefono]= useState("");
  return (

    <Form style={{ backgroundImage: "linear-gradient(#d8af97, #edb8fa)" }}>
      <ComponentNavbar />
      <div style={{ margin: "18%", color: "#d1052a", background: "white", height: "80%", width: "50%", borderRadius: "9px black", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black", padding: "10px", alignItems: "stretch" }}>

        <h1 style={{ padding: "2px", textShadow: "2px 2px 5px #000000" }}>Ingresar</h1>
        <form justify="center" style={{ width: "38rem" }}>

          <div className="mb-3" style={{ width: "30rem", position: "relative", margin: "40px", }}>
            <label className="form-label">Ingresa tu email</label>
            <input type="email" className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={login_email}
              id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="email@e-mail.com" />
            <div id="emailHelp" className="form-text">Si tu correo existe, te enviaremos un SMS con tu nueva clave.</div>
          </div>
          <div className="mb-3" style={{ width: "30rem", position: "relative", margin: "40px", }}>
            <label className="form-label">Teléfono</label>
            <input type="text" className="form-control"
              onChange={e => setTelefono(e.target.value)}
              value={telefono}
              id="exampleInputPassword1" placeholder="+569" />
          </div>
          <Link to="/">
            <button style={{ width: "20rem", position: "relative", margin: "40px", }} type="submit" className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                actions.recuperar_clave_funcion(login_email, telefono);
                
              }} >
              Recuperar Contraseña
            </button>


          </Link>
          <Link to="/recuperar/clave"><p>Recuperar Contraseña</p></Link>
        </form>
      </div>

      <Footer />
    </Form>

  );
}

export default Recuperar_Clave;


