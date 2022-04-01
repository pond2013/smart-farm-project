import React, { useState } from 'react';
import './login.scss';
import logo from '../../assets/img/kkm.png';
import { useHistory } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';


function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    let history = useHistory();
    async function loginClick(){    
        console.warn(username,password)
        console.log("kokomi")
        let item = {username, password};
        // let result = await fatch(""),{
        //   medthod: 'POST',
        //   headers:{
        //     "Content-Type": "application/json",
        //     "Accept": "application/json"
        //   },
        //   body: JSON.stringify(item)
        // }};

        // result = await result.json();
        // localStorage.setItem(JSON.stringify(result))
        history.push('/main')
    }
    function registerClick(){    
        history.push("/register")
        alert("หมอลำ");
    }

    
    return(
        <>
        
        <div className="card">
           <Row>
             <Col xs={6}>
                <div class="card-left"> 
                    <img class="img-logo" src={logo} />
                    <p>SMART FARM</p>
                    
                </div>
              </Col>
              <Col xs={6}>
                <div className="card-right">
                  <form>
                    <h1>Login</h1>
                    <input type="text" id="username" name="username" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></input>
                    <input type="password" id="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                    <input type="submit" value="LOGIN" onClick={loginClick}></input>
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
