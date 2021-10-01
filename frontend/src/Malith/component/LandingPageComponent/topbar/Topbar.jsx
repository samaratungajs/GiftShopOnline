import React, { useEffect } from "react";
import Logo from "./GifteryLogo.png";
import "./topbar.css";
import {Redirect, useLocation} from 'react-router-dom'
import {useState } from 'react'
import axios from 'axios' 


export default function Topbar(props) {
  const [searchKeyword, setSearchKeyword] = useState([]);
  const [status, setStaus] = useState(false);
  const [wishlistLength, setwishlistLength] = useState("");
  const [currentUser, setcurrentUser] = useState("");
  const [URL, setURL] = useState(window.location.pathname);
  const [cartCount, setcartCount] = useState("");
  const {search} = useLocation();

useEffect(() => {
  getUser();
  
}, [window.location.href])


const getUser = ()=>{
  
    const access_token = localStorage.getItem('token');
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
                setcurrentUser(response.data.user.email);
                fetchWishlist(response.data.user.email);
                getCartCount(response.data.user.email);
            }         
          } )
          .catch()

}


const fetchWishlist = async (currentuser) =>{
  const res = await axios.get(`/awishlist/getwishlistitem/${currentuser}`);
     setwishlistLength(res.data.data.length);
}


const getCartCount = async (currentuser)=>{
  const res = await axios.get(`http://localhost:9999/cartApi/getcartItems/${currentuser}`);
  setcartCount(<span
    className="position-absolute badge rounded-pill bg-warning m-0"
    style={{ fontSize: "0.9em"}}
  >{res.data.data.length}</span>);
}


const handleChange=(e)=>{
    setSearchKeyword(e.currentTarget.value);
    
}

  const handleSearchArea=(e)=>{
    e.preventDefault();
    axios.post("/abuyer/getallitems" + search).then((res)=>{
        if (res.data) {
            
          const result = res.data.filter(
            (product) =>
             product.productName.toLowerCase().includes(searchKeyword)
          );
          
         if(result) 
         {setStaus(true);}

         props.prodProp(result)
          }
          
          

    });
  }



  return (
    <div className="Aheader my-0 sticky-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-12 col-12">
            <div className="py-3">
              <a href="/"><img src={Logo} alt="" style={{ maxWidth: "90px" }} /></a>
            </div>
          </div>
          
          <div className="col-md-6 col-12 text-center">

          {URL === "/abuyer/search"||
            URL === "/abuyer/search/"?

           <form className="d-flex mt-3"style={{maxWidth:"600px"}} onSubmit={handleSearchArea}>
        <input className="form-control" type="search" value={searchKeyword} onChange={handleChange}  placeholder="Search" aria-label="Search"/> 
        <button type="submit" className="btn btn-dark" type="submit">Search</button>
      </form> :
      <span className="d-flex justify-content-center">
      <h1 style={{fontFamily:"'Pacifico', cursive", fontSize:"3rem",color:"", marginTop:"1px",letterSpacing:"3px"}}>Giftery</h1>
      <i class="fas fa-gift fa-3x mt-2 px-2"></i>
</span>
}
</div>

          <div className="col-md-3 col-12 text-right">
            {!currentUser ? <p className="my-md-4 Aheader-links">
              
              
            <a href="#" className="Adropdown px-1" style={{marginLeft:"10px"}}>
              <i class="fas fa-caret-square-down px-1"></i>Sign In

              <div class="Adropdown-content" style={{fontFamily:"'Poppins', sans-serif"}}>
                <a href="/login"><i class="fas fa-sign-in-alt px-2"></i>Buyer Login</a>
                <a href="/supplier/login"><i class="fas fa-sign-in-alt px-2"></i>Supplier Login</a>
                <a href="/user/login"><i class="fas fa-sign-in-alt px-2"></i>User Login</a>
                </div>


              </a>




              <a href="#" className="px-1">
                |
              </a>
              <a href="#" className="Adropdown px-1" style={{marginLeft:"10px"}}>
              Create an Account<i class="fas fa-user-plus px-1"></i>

              <div class="Adropdown-content" style={{fontFamily:"'Poppins', sans-serif"}}>
                <a href="/register"><i class="fas fa-sign-in-alt px-2"></i>Buyer Signup</a>
                <a href="/supplier/register"><i class="fas fa-sign-in-alt px-2"></i>Supplier Signup</a>
                </div>


              </a>
            </p> 
            
            :
            <div className="d-flex">
           <div className="mt-3">
            <a href="/cart" className="AtopCart">
                
            <i className="fas fa-shopping-cart AhoverTop my-2 Anavicon" style={{fontSize:"25px", marginLeft:"1rem"}}></i> 
                   
            {cartCount}
              
            </a>

            <a href="/abuyer/wishlist" className="AtopCart">
                
            <i className="fas fa-heart AhoverTop  Anavicon" style={{fontSize:"25px", marginLeft:"2rem"}}></i> 
            <span
                    className="position-absolute badge rounded-pill bg-danger m-0"
                    style={{ fontSize: "0.9em"}}
                  >
                    {wishlistLength}
                  </span>
                  
            </a>


            
        
            <a href="#" className="Adropdown AtopUser">
                
            <i className="fas fa-user AhoverTop my-1 Anavicon Adropbtn" style={{fontSize:"25px"}}></i> 
            <div class="Adropdown-content" style={{fontFamily:"'Poppins', sans-serif"}}>
                <a href="/abuyer/wishlist"><i class="fas fa-heart px-2"></i>Wishlist</a>
                <a href="/abuyer/myorders"><i class="far fa-list-alt px-2"></i>My Orders</a>
                <a href="#"><i class="fas fa-user-circle px-2"></i>Profile</a>
                <a href="#"><i class="fas fa-sign-in-alt px-2"></i>Logout</a>
                </div>
            </a>
            
</div>
  </div>
 }

          </div>
        </div>
      </div>
    </div>
  );
}