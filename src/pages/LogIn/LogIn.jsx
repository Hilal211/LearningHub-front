
import React, { useState, useEffect } from "react"
import "./LogIn.css"
import {Link} from "react-router-dom";

export default function LogIn() {

    const[UserName, SetUserName]=useState('');
    const[Password, SetPassword]=useState('');

    useEffect(() => {
        async function fetchData() {
          const res = await fetch("http://localhost:8000/api/getadmin");
          res
            .json()
            .then((res) => {
              //console.log(res[0]);
              //console.log(res);
    
            //   SetUserName(res);
            console.log(res)
            })
            .catch((err) => console.log(err));
        }
        fetchData();
    
      }, []);





    


    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('containerLogin');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });


    }
    )


    const handleSubmit = async (e) => {
		e.preventDefault();}

    return (

        <div>




            <div class="containerLogin container" id="containerLogin">

            <form onSubmit={handleSubmit} class="formLogin">

                <div class="form-container sign-in-container">
                    <form action="#" class="formLogin">
                        <h1 class="titleLogin">Login</h1>
                        <input type="email" name="name" class="inputLogin" value={UserName} onChange={handleSubmit}   placeholder="UserName" required />

                        <input type="password" name="password"  class="inputLogin" value={Password} onChange={handleSubmit}  placeholder="Password" required />


                        {/* <a href="#">Forgot your password?</a> */}
                        <Link to="/HomePage" type="submit"><button class="btnLogin">Sign In 1</button></Link>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1 class="titleLogin">Collège National Orthodoxe (St Elie)</h1>
                            {/* <p>Hello People</p> */}
                            <button to="/HomePage" class="ghost btnLogin" id="signIn">About Us</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1 class="titleLogin">Welcome Back!</h1>
                            <p class="descLogin">To keep connected with us please login with your personal info</p>
                            <button class="ghost btnLogin" id="signUp">About us</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>

            <script src="login.js"></script>

           
        </div>
     



    )
}