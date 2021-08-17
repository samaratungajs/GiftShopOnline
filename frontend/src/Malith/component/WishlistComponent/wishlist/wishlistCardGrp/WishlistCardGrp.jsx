import React, { Component } from 'react'
import WishlistCard from '../wishlistCard/WishlistCard'
import './wishlistCardGrp.css'

export default class WishlistCardGrp extends Component {


    render() {
        return (
            <div>
                <h4 className="mt-1">Defailt Wishlist</h4>
                <div className="row p-3">
                <div className="card mb-5n p-0">
                    <div className="container-fluid" style={{backgroundColor:"#f2f2f2", border:"1px"}}>
                    <div className="row">

                        <div className="col-xl-3 col-sm-4 col-12">
                        <div class="btn-group AcatDropDownBtn">
                    <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Category
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                    </div>
                        </div>
                    </div>
                    
            



                        <WishlistCard/>
                        <WishlistCard/>
                        <WishlistCard/>
                        <WishlistCard/>
                        <WishlistCard/>


                        </div> 
            </div>
            </div>
            </div>
        )
    }
}
