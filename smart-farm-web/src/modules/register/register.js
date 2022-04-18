import React, { useState } from 'react'
import './register.scss'
import img from '../../assets/img/kkuregis.jpg'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

function Register() {

  const [email, setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    isValiEmail(email)
    if (password == confirm && isValiEmail(email) == true) {
      fetch(
        'http://localhost:8080/api/User',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: "",
              name: username, 
              Email: email,
              Password: password
          }),
        },
      ).then((response) => {
        if (response.ok == true) {
          history.push('../main')
        } else {
          alert('Username Taken or Bad Username or Password ')
        }
      })
      
    } else {
      alert('Wrong Password or E-mail')
    }
  }

  function isValiEmail(val) {
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regEmail.test(val)) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div className="card">
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
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                ></input>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                ></input>
                <input
                  type="password"
                  id="Confirmpassword"
                  name="Confirmpassword"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirm(e.target.value)
                  }}
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
