import React,{useEffect, useState} from "react"
import axios from "axios"
import {Redirect} from 'react-router-dom'
import Cookies from 'cookie'


function Login() {

    const [email , setUsernameLog] = useState("");
    const [password , setPasswordLog] = useState("");

    const[A , setA] = useState("")
    const[B, setB] = useState("")  

    
    function login(e){
        e.preventDefault();

        const oldUser = {
            email,
            password
        }
        
        axios.post("http://localhost:9999/buyerlogin/login",oldUser).then((response)=>{
            if(response.data.message){
                alert(response.data.message)   
                window.location='' 
            }else{
                alert("login Success")
                
                localStorage.setItem("token" , response.data.token)
                return(<Redirect to = "./post"/>)
            }    
        }).catch((err) =>{
            alert(err)
        })
    }    

      return (
        <div className="App">    
          <div className = "login">
            <h1>Login</h1>
            <label>E-mail</label>
            <input type="text" placeholder="Enter your E-mail" onChange={(e) => {
                setUsernameLog(e.target.value);
            }}></input>
            <label>Password </label>
            <input type="text" placeholder="Enter your Password" onChange={(e) => {
                setPasswordLog(e.target.value);
            }}></input>
            <button onClick={login}>login</button>
            <h3>{A}</h3>
            <h3>{B}</h3>
            <h3></h3>

          </div>
        </div>
      );
    }
    
    export default Login;