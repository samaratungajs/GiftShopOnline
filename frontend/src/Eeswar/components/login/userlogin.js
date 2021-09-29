import React, { useEffect, useState } from "react"
import axios from "axios"
import { Redirect } from 'react-router-dom'
import Cookies from 'cookie'


function Login() {

    const [email, setUsernameLog] = useState("");
    const [password, setPasswordLog] = useState("");

    const [A, setA] = useState("")
    const [B, setB] = useState("")

    const zero = 0 ;
    
    function login(e) {
        e.preventDefault();

        const oldUser = {
            email,
            password
        }

        axios.post("http://localhost:9999/userlogin/login", oldUser).then((response) => {
            if (response.data.message) {
                alert(response.data.message)
                window.location = ''
            } else {
                alert("login Success")

                console.log(email)
                
                axios.get("http://localhost:9999/admin/user/"+email)   
                .then(response => {
                    console.log(response.data.data )
                    if(response.data.data.type == "admin"){
                        window.location='/dashboard' 
                    }
                    else if(response.data.data.usertype == "accountant"){
                        window.location='/'
                    }
                    else if(response.data.data.usertype == "productManager"){
                        window.location=`/managerdash`
                    }
                    
                    
                })





                localStorage.setItem("token", response.data.token)
                return (<Redirect to="./post" />)
            }
        }).catch((err) => {
            alert(err)
        })
    }

    return (

        
        <div class="container" >
            <br/><br/>
            <form>
                <div class="form-group">
                    <div >
                        <div>
                            <h1>User Login</h1><br /><br />
                            <label>E-mail</label>
                            <input class="form-control" type="text" placeholder="Enter your E-mail" onChange={(e) => {setUsernameLog(e.target.value);}}></input>
                        </div>

                        <div class="form-group">
                            <label>Password </label>
                            <input class="form-control" type="password" placeholder="Enter your Password" onChange={(e) => {setPasswordLog(e.target.value);}}></input>

                            <div align="right">
                            <span ><a href="#">Forgot password?</a></span>
                            </div>
                            <button class="btn btn-primary" type="submit" onClick={login}>login</button>
                        </div>
                        
                        <h3>{A}</h3>
                        <h3>{B}</h3>

                    </div>
                </div>

            </form>
        </div>

    );
}

export default Login;