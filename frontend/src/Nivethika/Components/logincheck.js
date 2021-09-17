import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from "axios"


const Logincheck = () => {
    const access_token = localStorage.getItem('token')
    const[username , setUsername] = useState("")

        let config = {
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
        }
        axios.get( 
            'http://localhost:9999/buyerlogin/post',
            config)
          .then( ( response ) => {
            if(response.data.message){
                alert(response.data.message)
                console.log(response.data.message);
            }else{   
              setUsername(response.data.user.username)
            }         
          } )
          .catch()



    return (

        <div>
            {username}
        </div>
    )



}

export default Logincheck;