import React from 'react';
import './register.scss';
import img from '../../assets/img/11.jpg';


function Register() {
    return(
        <>
        
        <div class="card">
           
            <div class="card-left"> 
                <img class="img-kku" src={img} />
                
                
            </div>
            <div class="card-right">
                <form>
                <h1>CREATE ACCOUNT</h1>
                <input type="text" id="email" name="email" placeholder="E-mail"></input>
                <input type="text" id="username" name="username" placeholder="Username"></input>
                <input type="password" id="password" name="password" placeholder="Password"></input>
                <input type="password" id="Confirmpassword" name="Confirmpassword" placeholder="Confirm Password"></input>
                <input type="submit" value="SIGN UP"></input>
                
            </form>
            </div>
           
 
        </div>
        

        </>
        
    );
}

export default Register;