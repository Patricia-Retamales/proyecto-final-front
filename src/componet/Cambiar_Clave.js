import Form from 'react-bootstrap/Form';
import ComponentNavbar from './ComponentNavbar';
import React, { useEffect, useState, useContext } from "react";
import Footer from "../componet/ComponenteFooter";
import { Context } from "../store/AppContext.js"
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";




function Cambiar_Clave() {
  const { store, actions } = useContext(Context);
  const [nueva_clave, setNueva] = useState("");
  const [actual_clave, setActual] = useState("");
  const { token } = useParams();

  useEffect(() => {
    actions.acceso_privado()
  }, []);


  return (

    <Form style={{ backgroundImage: "linear-gradient(#d8af97, #edb8fa)" }}>
      <ComponentNavbar />




      <div style={{ margin: "18%", color: "#d1052a", background: "white", height: "80%", width: "50%", borderRadius: "9px black", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black", padding: "10px", alignItems: "stretch" }}>
        <h1 style={{ padding: "2px", textShadow: "2px 2px 5px #000000" }}>Ingresa tu contraseña actual</h1>

        <form justify="center" style={{ width: "38rem" }}>
          <div className="mb-3" style={{ width: "30rem", position: "relative", margin: "40px", }}>
            <label className="form-label">Ingresar Contraseña Actual</label>
            <input type="email" className="form-control"
              onChange={e => setActual(e.target.value)}
              value={actual_clave}
              id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Contraseña Actual" />
            <div id="emailHelp" className="form-text">Ingresa tu contraseña actual para cambiarla.</div>
          </div>

          <div className="mb-3" style={{ width: "30rem", position: "relative", margin: "40px", }}>
            <label className="form-label">Ingresar Contraseña Nueva</label>
            <input type="email" className="form-control"
              onChange={e => setNueva(e.target.value)}
              value={nueva_clave}
              id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Contraseña Nueva" />
            <div id="emailHelp" className="form-text">No la olvides esta vez!</div>
          </div>

          <Link to="/">
            <button type="submit" style={{ width: "20rem", position: "relative", margin: "40px", }} className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                actions.cambiar_clave_funcion(nueva_clave, actual_clave);
              }}>


              Confirmar
            </button>
          </Link>
        </form>

      </div>

      <Footer />
    </Form >

  );
}

export default Cambiar_Clave;
