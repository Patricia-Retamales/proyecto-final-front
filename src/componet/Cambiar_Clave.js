import Form from 'react-bootstrap/Form';
import ComponentNavbar from './ComponentNavbar';
import React, { useEffect, useState, useContext } from "react";
import Footer from "../componet/ComponenteFooter";
import { Context } from "../store/AppContext.js"
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Cambiar_Clave() {
  const { store, actions } = useContext(Context);
  const [nueva_clave, setClave] = useState("");
  const [email, setEmail] = useState("");
  const { token } = useParams();


  var myHeaders = new Headers();

  const autorizacion = "Bearer " + token;
  console.log(autorizacion);
  myHeaders.append("Authorization", autorizacion)


  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://3000-sneelyg-proyectofinalba-tvacgmaa6t1.ws-us72.gitpod.io/privada", requestOptions)
    .then(response => response.json())
    .then(result => {
      setEmail(result.usuario);
      if (result.success == "ok") {
        console.log(result)
      }
      /* else {
         window.location.href = "/login"
       }*/
    })
    .catch(error => console.log('error', error));


  return (

    <Form style={{ backgroundImage: "linear-gradient(#d8af97, #edb8fa)" }}>
      <ComponentNavbar />
     
      <div style={{ margin: "18%", color: "#d1052a", background: "white", height: "80%", width: "50%", borderRadius: "9px black", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black", padding: "10px", alignItems: "stretch" }}>
      <h1 style={{ padding: "2px", textShadow: "2px 2px 5px #000000" }}>Ingresa tu nueva contraseña</h1>
        <form justify="center" style={{ width: "38rem" }}>
          <div className="mb-3" style={{ width: "30rem", position: "relative", margin: "40px", }}>
            <label className="form-label">Ingresar Contraseña</label>
            <input type="email" className="form-control"
              onChange={e => setClave(e.target.value)}
              value={nueva_clave}
              id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="password" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <Link to="/">
            <button type="submit" style={{ width: "20rem", position: "relative", margin: "40px", }} className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                actions.cambiar_clave_funcion(nueva_clave, email, token);
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
// import Form from 'react-bootstrap/Form';
// import ComponentNavbar from './ComponentNavbar';
// import React, { useEffect, useState, useContext } from "react";
// import Footer from "../componet/ComponenteFooter";
// import { Context } from "../store/AppContext.js"
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";

// function Cambiar_Clave() {
//   const { store, actions } = useContext(Context);
//   const [nueva_clave, setClave] = useState("");
//   const [email, setEmail] = useState("");
//   const { token } = useParams();


//   var myHeaders = new Headers();

//   const autorizacion = "Bearer " + token;
//   console.log(autorizacion);
//   myHeaders.append("Authorization", autorizacion)


//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };

//   fetch("https://3000-sneelyg-proyectofinalba-tvacgmaa6t1.ws-us72.gitpod.io/privada", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//       setEmail(result.usuario);
//       if (result.success == "ok") {
//         console.log(result)
//       }
//       /* else {
//          window.location.href = "/login"
//        }*/
//     })
//     .catch(error => console.log('error', error));


//   return (

//     <Form>
//       <ComponentNavbar />

//       <form justify="center" style={{ width: "38rem" }}>
//         <div className="mb-3">
//           <label className="form-label">Ingresa tu nueva contraseña</label>
//           <input type="email" className="form-control"
//             onChange={e => setClave(e.target.value)}
//             value={nueva_clave}
//             id="exampleInputEmail1" aria-describedby="emailHelp"
//             placeholder="password" />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>

//         <Link to="/">
//           <button type="submit" className="btn btn-primary"
//             onClick={(e) => {
//               e.preventDefault();
//               actions.cambiar_clave_funcion(nueva_clave, email, token);
//             }}>


//             Submit
//           </button>
//         </Link>
//       </form>


//       <footer />
//     </Form >

//   );
// }

// export default Cambiar_Clave;