import React from 'react';
import './login.scss';
import logo from '../../assets/img/kkm.png';
import { useHistory } from 'react-router-dom';


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
           
            <div class="card-left"> 
                <img class="img-logo" src={logo} />
                <p>SMART FARM</p>
                
            </div>
            <div class="card-right">
                <form>
                <h1>Login</h1>
                <input type="text" id="username" name="username" placeholder="Username"></input>
                <input type="password" id="password" name="password" placeholder="Password"></input>
                <input type="submit" value="LOGIN" onClick={loginClick}></input>
                <a href='#' onClick={registerClick}>Create Account</a>
            </form>
                
            </div>
            
 
        </div>
        

        </>
        
    );
    
}



export default Login;