import React from "react";
import "./login.scss";
import logo from "../../assets/img/kkm.png";
import { Row, Col } from "react-bootstrap";

function Login() {
  return (
    <>
      <div className="card">
        <Row>
          <Col xs={6}>
            <div className="card-left">
              <img className="img-logo" src={logo} />
              <p>SMART FARM</p>
            </div>
          </Col>
          <Col xs={6}>
            <div className="card-right">
              <form>
                <h1>Login</h1>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                ></input>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                ></input>
                <input
                  type="submit"
                  value="Login"
                  onSubmit={navigateToMain}
                ></input>
                <a href="">Create Account </a>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

function navigateToMain() {
  // do sth
}

export default Login;
