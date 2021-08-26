import React, { useEffect, useState } from "react"
import axios from "axios"
import { Redirect } from 'react-router-dom'
import img from "../../photos/sale.jpg"

function Login() {

    const [email, setUsernameLog] = useState("");
    const [password, setPasswordLog] = useState("");

    const [A, setA] = useState("")
    const [B, setB] = useState("")


    function login(e) {
        e.preventDefault();

        const oldUser = {
            email,
            password
        }

        axios.post("http://localhost:9999/buyerlogin/login", oldUser).then((response) => {
            if (response.data.message) {
                alert(response.data.message)
                window.location = ''
            } else {
                alert("login Success")

                console.log(email)
                axios.get("http://localhost:9999/buyer/" + email)
                    .then(response => {
                        console.log(response.data.data)

                        window.location = `/${email}`


                    })

                localStorage.setItem("token", response.data.token)
                return (<Redirect to="./post" />)
            }
        }).catch((err) => {
            alert(err)
        })
    }

    return (


        <div class='some-page-wrapper'>
        <div class='row'>
      
          
         
          <div class='column'>
            <div class='blue-column'>
              <img src={img} ></img>
            </div>
          </div>
          
          
          
          
          
          
          <div class='column'>
            <div class='green-column'>
            <br/>
            <br/>
            <div class="container" >
            <form>
                <div class="form-group">
                    <div >
                        <div>
                            <h1>Login</h1><br /><br />
                            <label>E-mail</label>
                            <input class="form-control" type="text" placeholder="Enter your E-mail" onChange={(e) => {setUsernameLog(e.target.value);}}></input>
                        </div>

                        <div class="form-group">
                            <label>Password </label>
                            <input class="form-control" type="password" placeholder="Enter your Password" onChange={(e) => {setPasswordLog(e.target.value);}}></input>

                            <div align="right">
                            <span ><a href="/register">Create An Accounct</a></span>
                            </div>
                            <button class="btn btn-primary" type="submit" onClick={login}>login</button>
                        </div>
                        
                        <h3>{A}</h3>
                        <h3>{B}</h3>

                    </div>
                </div>

            </form>
        </div>
            </div>
          </div>
        </div>
      </div>

    );
}

export default Login;