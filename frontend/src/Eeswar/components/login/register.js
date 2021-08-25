import React,{useState} from "react"
import axios from "axios"



function Register() {

    const [firstName , setFirstnameReg] = useState("");
    const [lastName , setLastnameReg] = useState("");
    const [pNumber , setPnumberReg] = useState("");
    const [email , setUsernameReg] = useState("");
    const [password , setPasswordReg] = useState("");

    function register(e){
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            pNumber,
            email,
            password
        }

        axios.post("http://localhost:9999/buyerlogin/register",newUser).then(()=>{
            alert("User Added")
        }).catch((err) =>{
            alert(err)
        })
    }
    
      return (
        <div className="App">
          <div classname = "registration">
            <h1>Registration</h1>

            <label>First Name</label>
            <input type="text" onChange={(e) => {
                setFirstnameReg(e.target.value);
            }}></input>

            <label>Last Name</label>
            <input type="text" onChange={(e) => { 
                setLastnameReg(e.target.value);
            }}></input>

            <label>Phone Number</label>
            <input type="text" onChange={(e) => {
                setPnumberReg(e.target.value);
            }}></input>

            <label>Email</label>
            <input type="text" onChange={(e) => {
                setUsernameReg(e.target.value);
            }}></input>
            <label>Password</label>
            <input type="text" onChange={(e) => {
                setPasswordReg(e.target.value);
            }}></input>
            <button onClick={register}>Register</button>
          </div>
        </div>
      );
    }
    
    export default Register;