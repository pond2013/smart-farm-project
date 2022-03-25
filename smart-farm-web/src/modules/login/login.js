import React from 'react';
import './login.scss';
import logo from '../../assets/img/kkm.png';
import { useHistory } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';


function Login() {
    let history = useHistory();
    function loginClick(){    
        history.push("/main")
    }
    function registerClick(){    
        history.push("/register")
        alert("หมอลำ");
    }

    
    return(
        <>
        
        <div class="card">
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
                    <input type="text" id="username" name="username" placeholder="Username"></input>
                    <input type="password" id="password" name="password" placeholder="Password"></input>
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
