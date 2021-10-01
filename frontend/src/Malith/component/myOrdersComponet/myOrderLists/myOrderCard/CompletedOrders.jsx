import React from 'react'
import img1 from './watchcat.jpg'

export default function CompletedOrder({orders}) {
    return (
        orders.map((o)=>(<div class="container mb-3 mt-3">
    <div class="d-flex justify-content-center row">
        <div class="col-md-12">
            <div class="row p-2 m-0 bg-white border rounded">
  
                <div class="col-md-2 mt-1"><img class="img-fluid img-responsive rounded Aproduct-image" src={o.imageURL}/></div>
                <div class="col-md-7 mt-3">
                    <h5>{o.productName}</h5>
                   
                    <div class="mt-1 mb-1 Aspec-1"><span class="Adot"></span><span>Order ID: <b>{o._id}</b></span></div>
                    <div class="mt-1 mb-1 Aspec-1"><span class="Adot"></span><span>Supplier: <b>{o.supplier}</b></span></div>
                    <div class="mt-1 mb-1 Aspec-1"><span class="Adot"></span><span>Category: <b>{o.category}</b></span></div>
                    <div class="d-flex flex-row align-items-center mt-2">
                       <h4 className="Aspec-1">Product Price:</h4> <h5 class="p-2 Ah5">LKR {o.wholesalePrice}.00</h5>
                    </div>

                    

                    {/* input field when click */}
                     {/* <div class="d-flex flex-row" style={{backgroundColor:"red"}}> <input type="text" Placeholder="Note" className="w-auto p-3 writeInput writeInputText"></input></div>    */}
                </div>


                
                
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                <div class="d-flex flex-column mt-5"><button class="btn btn-outline-primary" type="button"><i class="fas fa-shopping-cart mx-2"></i>Add Cart</button><button class="btn btn-outline-dark mt-2" type="button"><i class="fas fa-shopping-bag mx-2"></i>Buy Now</button></div>
                </div>
            </div>
            </div>
            </div>
            </div>))

    )
}
