import React,{useEffect, useState} from "react"
import axios from "axios"
import {Link} from 'react-router-dom'


function MainPage (){

    const access_token = localStorage.getItem('token')
    const[email , setUsername] = useState("")

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
            }else{   
              setUsername(response.data.user.email)
            }         
          } )
          .catch()

          

    return(
      <Link
      to={{
        pathname: "/supplier/create",
        state: {email}// your data array of objects
      }}
    />

    )

}

export default MainPage