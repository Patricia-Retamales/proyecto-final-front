import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ComponentNavbar from './ComponentNavbar';
import React, { useEffect, useState, useContext } from "react";
import Footer from "../componet/ComponenteFooter";
import { Context } from "../store/AppContext.js"
import { Link } from 'react-router-dom';

function Login() {
  const { store, actions } = useContext(Context);
  const [login_email, setEmail] = useState("");
  const [login_password, setPassword] = useState("");

  let datos_login = {};
  return (

    <Form>
      <ComponentNavbar />
      <div>
        <form justify="center" style={{ width: "38rem" }}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control"
              onChange={e => setEmail(e.target.value)}
              value={login_email}
              id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="email@e-mail.com" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control"
              onChange={e => setPassword(e.target.value)}
              value={login_password}
              id="exampleInputPassword1" placeholder="password" />
          </div>
          <Link to="/">
            <button type="submit" className="btn btn-primary"
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