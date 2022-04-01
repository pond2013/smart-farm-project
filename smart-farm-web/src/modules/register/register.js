import React, { useState } from 'react';
import './register.scss';
import img from '../../assets/img/11.jpg';
import { useHistory } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

function Register() {
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    let history = useHistory();
    function nevigateTomain(){    
        history.push("../login")

    }
    return(
        <>
        <div class="card">
            <Row>
                <Col xs={6}>
                <div class="card-left"> 
                    <img class="img-kku" src={img} />
                    
                    
                </div>
                </Col>
                <Col xs={6}>
                    <div class="card-right">
                        <form>
                            <h1>CREATE ACCOUNT</h1>
                            <input type="text" id="email" name="email" placeholder="E-mail"></input>
                            <input type="text" id="username" name="username" placeholder="Username"></input>
                            <input type="password" id="password" name="password" placeholder="Password"></input>
                            <input type="password" id="Confirmpassword" name="Confirmpassword" placeholder="Confirm Password"></input>
                            <input type="submit" value="SIGN UP" onClick={nevigateTomain}></input>
                            
                        </form>
                    </div>
                </Col>
            
           </Row>
 
        </div>
        

        </>
        
    );
}

export default Register;