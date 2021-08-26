import React from 'react'
import img1 from './watchcat.jpg'

export default function MyOrderCard() {
    return (
        <div class="container mb-3">
    <div class="d-flex justify-content-center row">
        <div class="col-md-12">
            <div class="row p-2 bg-white border rounded">
                <div class="col-md-2 mt-1"><img class="img-fluid img-responsive rounded Aproduct-image" src="https://www.wishque.com/data/images/products/8106/36018112_711445089015_0.93206800-1620979494.png"/></div>
                <div class="col-md-7 mt-3">
                    <h5>Citizen Luxury Watch</h5>
                   
                    <div class="mt-1 mb-1 Aspec-1"><span class="Adot"></span><span>Order ID: <b>65300832488905890</b></span></div>
                    <div class="mt-1 mb-1 Aspec-1"><span class="Adot"></span><span>Order Time: <b>08.30pm  May 13, 2021</b></span></div>
                    <div class="mt-1 mb-1 Aspec-1"><span class="Adot"></span><span>Order Status: <b>Pending clearence</b></span></div>
                    <div class="d-flex flex-row align-items-center mt-2">
                       <h4 className="Aspec-1">Order Amount</h4> <h5 class="p-2 Ah5">LKR 10,000</h5>
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
            </div>

    )
}
