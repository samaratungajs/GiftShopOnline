import React, { useEffect, useState } from "react"
import axios from "axios"
import { Redirect } from 'react-router-dom'
import img from "../../photos/supplierlogin.jpg"


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

        axios.post("http://localhost:9999/supplierlogin/login", oldUser).then((response) => {
            if (response.data.message) {
                alert(response.data.message)
                window.location = ''
            } else {
                alert("login Success")

                console.log(email)
                axios.get("http://localhost:9999/supplier/" + email)
                    .then(response => {
                        console.log(response.data.data)

                        window.location = `/supplier/${email}`


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
            <br /><br /><br /><br />
            <div class='row'>



                <div class='column'>
                    <br/>
                    <div class='blue-column'>

                        <div align="center">
                            <img src={img} ></img>
                        </div>

                    </div>
                </div>






                <div class='column'>
                    <div class='green-column'>

                        <div class="container" >
                            <form>
                                <div class="form-group">
                                    <div >
                                        <div>
                                            <h1>Supplier Login</h1>
                                            <br /><br />
                                            <label>E-mail</label>
                                            <input class="form-control" type="text" placeholder="Enter your E-mail" onChange={(e) => {
                                                setUsernameLog(e.target.value);
                                            }}></input>
                                            <label>Password </label>
                                            <input class="form-control" type="password" placeholder="Enter your Password" onChange={(e) => {
                                                setPasswordLog(e.target.value);
                                            }}></input>
                                            <h3></h3>
                                            <br />
                                            <div align="right">
                                                <span ><a href="/supplier/register">Create An Accounct</a></span>
                                            </div>
                                            <button class="btn btn-primary" type="submit" onClick={login}>SIGN IN</button>
                                            <h3>{A}</h3>
                                            <h3>{B}</h3>



                                        </div>
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