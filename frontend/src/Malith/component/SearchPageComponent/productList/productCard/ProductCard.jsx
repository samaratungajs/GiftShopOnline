import axios from 'axios';
import React, { useState } from 'react'
import './productCard.css'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function ProductCard({proc}) {
  const [currentuser, setCurrentUser] = useState("Anjana");
  

  const insertWishItems = async (proc) => {
   const newWishlistItem = {
      category:proc.category,
      brand:proc.brand,
      productName:proc.productName,
      pricePItem:proc.pricePItem,
      wholesalePrice:proc.wholesalePrice,
      imageURL:proc.imageURL,
      currentuser,
      productId:proc._id,
      description:proc.description,
      supplier:proc.supplier,
    };

    try {
    await axios.post("/awishlist/addwishlistitem", newWishlistItem);
      // //  window.location.replace("/post/"+ res.data._id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item saved',
        showConfirmButton: false,
        timer: 1100
      })
      
    } catch (error) {
      alert(error);
    }
  };

      return (
          <div class="col-lg-3 mt-2">


          <div class="card">
              <div class="card-body">
                  <div class="card-img-actions"> <img src={proc.imageURL} class="card-img img-fluid" width="96" height="350" alt=""/> </div>
              </div>
              <div class="card-body bg-light text-center">
                  <div class="mb-2">
                      <h6 class="font-weight-semibold mb-2"> <Link to={`/product/${proc._id}`} class="text-default mb-2" data-abc="true">{proc.productName}</Link> </h6> <a href={`/abuyer/search/?cat=${proc.category}`} class="text-muted" data-abc="true">{proc.category}</a>
                  </div>
                  <h4 class="mb-0 font-weight-bold">LKR {proc.wholesalePrice}</h4><span class="Astrike-text">LKR {proc.pricePItem}</span>
                  <div class="text-muted mb-3">{proc.brand}</div> 
                  <div class="d-flex justify-content-around"><i class="fas fa-shopping-cart AproductIcons AproductCartIcons"></i><a onClick={()=>{insertWishItems(proc);}}><i class="fas fa-heart AproductIcons AproductHeartIcons"></i></a></div>
              </div>
          </div>
      </div>
        )
    }

