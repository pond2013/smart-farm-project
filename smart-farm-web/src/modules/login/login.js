import React, { useState } from 'react';
import './login.scss';
import logo from '../../assets/img/kkm.png';
import { useHistory } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';


function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    let history = useHistory();
    
    const handleSubmit = async e =>{
      e.preventDefault();
      const rawResponse = await fetch('http://localhost:8080/api/User', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            id: "",
            pid: 343766, 
            name: username, 
            Email: "https://nxxxxxx.net/g/383661/",
            Password: password
          })
      });
      const content = await rawResponse.json();
        
        console.log(content);
      
      // window.location.href = "../main"
    }
    function registerClick(){    
      fetch("http://localhost:8080/api/User")
      .then((response) => response.json())
      .then((responseJSON) => {
          // do stuff with responseJSON here...

          console.log(responseJSON);
  
      });
        // history.push("/register")
    }

    
    return(
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
                    <input type="text" id="username" name="username" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></input>
                    <input type="password" id="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                    <input type="submit" value="LOGIN" onClick={handleSubmit}></input>
                    <a href='#' onClick={registerClick}>Create Account</a>
                  </form>
                    
                </div>
              </Col>
           </Row>

        </div>
        

        </>
        
    );
    
}



export default Login;
