
import Form from 'react-bootstrap/Form';
import ComponentNavbar from './ComponentNavbar';
import React, { useEffect, useState, useContext } from "react";
import Footer from "../componet/ComponenteFooter";
import { Context } from "../store/AppContext.js"
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

function Login() {
  const { store, actions } = useContext(Context);
  const [login_email, setEmail] = useState("");
  const [login_password, setPassword] = useState("");

  let datos_login = {};

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })




  return (

    <Form style={{
      backgroundImage: "linear-gradient(#d8af97, #edb8fa)",


    }}>
       <ComponentNavbar/>

      <div style={{ margin: "18%", color: "#d1052a", background: "white", height: "80%", width: "50%", borderRadius: "9px black", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black", padding: "10px", alignItems: "stretch" }}>
       
        <h1 style={{ padding: "2px", textShadow: "2px 2px 5px #000000" }}>Ingresar</h1>
        <form justify="center" style={{ width: "38rem" }}>

          <div className="mb-3" style={{ width: "30rem", position: "relative", margin: "40px", }}>
            <label className="form-label">Email address</label>
            <input type="email" className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={login_email}
              id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="email@e-mail.com" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3" style={{ width: "30rem", position: "relative", margin: "40px", }}>
            <label className="form-label">Password</label>
            <input type="password" className="form-control"
              onChange={e => setPassword(e.target.value)}
              value={login_password}
              id="exampleInputPassword1" placeholder="password" />
          </div>
          <Link to="/">
            <button style={{ width: "20rem", position: "relative", margin: "40px", }} type="submit" className="btn btn-outline-secondary"
              onClick={(e) => {
                e.preventDefault();
                {
                  datos_login = {
                    "email": login_email,
                    "password": login_password
                  }
                };
                actions.login_function(datos_login);
              }} >
              Submit
            </button>
          </Link>
        </form>
      </div>

      <Footer />
    </Form>

  );
}

export default Login;