import React from 'react';
import './login.scss';
import logo from '../../assets/img/kkm.jpg';


function Login() {
    return(
        <>
        
        <div class="card">
           
            <div class="card-left">
                
                <img src={logo} />
                
                <p>SMART FARM</p>
                
            </div>
          
            <form>
                <h1>Login</h1>
                <input type="text" id="username" name="username" placeholder="Username"></input>
                <input type="password" id="password" name="password" placeholder="Password"></input>
                <input type="submit" value="Login"></input>
                <a href="">Create Account </a>
            </form>
 
        </div>
        

        </>
        
    );
}

export default Login;