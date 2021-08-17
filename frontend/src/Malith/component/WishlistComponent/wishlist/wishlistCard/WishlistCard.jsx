import React, { Component } from 'react'
import './wishlistCard.css'
import image1 from './images/watchcat.jpg'

export default class WishlistCard extends Component {
    render() {
        return (
            <div class="container mb-3">
    <div class="d-flex justify-content-center row">
        <div class="col-md-12">
            <div class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded Aproduct-image" src={image1}/></div>
                <div class="col-md-6 mt-1">
                    <h5>Quant olap shirts</h5>
                    <div class="d-flex flex-row">
                        <div class="Aratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>310</span>
                    </div>
                    <div class="mt-1 mb-1 Aspec-1"><span>100% cotton</span><span class="Adot"></span><span>Light weight</span><span class="Adot"></span><span>Best finish<br/></span></div>
                    <div class="mt-1 mb-1 Aspec-1"><span>Unique design</span><span class="Adot"></span><span>For men</span><span class="Adot"></span><span>Casual<br/></span></div>
                    <p class="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br/><br/></p>
                    <div><a href="#" className="AaddNoteLink"><i class="far fa-clipboard"></i><span className="px-2">Add Note</span></a></div>


                    

                    {/* input field when click */}
                     {/* <div class="d-flex flex-row" style={{backgroundColor:"red"}}> <input type="text" Placeholder="Note" className="w-auto p-3 writeInput writeInputText"></input></div>    */}
                </div>


                
                
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1 Ah5">$13.99</h4><span class="Astrike-text">$20.99</span>
                    </div>
                    <div className="d-flex flex-row"><h6 class="text-success">Free shipping</h6><i className="fas fa-trash AwishTrashIcon"></i></div>
                    <div class="d-flex flex-column mt-4"><button class="btn btn-warning" type="button"><i class="fas fa-shopping-cart mx-2"></i>Add Cart</button><button class="btn btn-outline-dark mt-2" type="button"><i class="fas fa-shopping-bag mx-2"></i>Buy Now</button></div>
                </div>
            </div>
            </div>
            </div>
            </div>

           
        )
    }
}
