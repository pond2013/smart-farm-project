import React, { useState, useRef } from 'react'
import './register.scss'
import img from '../../assets/img/11.jpg'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

function Register() {
  const [email, setEmail] = useState('')
  // const [username,setUsername]=useState("");
  const Password = useRef(null)
  const Confirm = useRef(null)

  let history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    isValiEmail(email)
    if (Password.current.value != Confirm.current.value) {
      alert('Wrong Password')
    } else {
      history.push('../login')
    }
  }

  function isValiEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regEmail.test(val)) {
      console.log('Invalid Email Address')
    } else {
      console.log('Valid Email')
    }
  }

  return (
    <>
      <div class="card">
        <Row>
          <Col xs={6}>
            <div className="card-left">
              <img className="img-kku" src={img} />
            </div>
          </Col>
          <Col xs={6}>
            <div className="card-right">
              <form>
                <h1>CREATE ACCOUNT</h1>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                ></input>
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
                  ref={Password}
                ></input>
                <input
                  type="password"
                  id="Confirmpassword"
                  name="Confirmpassword"
                  placeholder="Confirm Password"
                  ref={Confirm}
                ></input>
                <input
                  type="submit"
                  value="SIGN UP"
                  onClick={handleSubmit}
                ></input>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Register
