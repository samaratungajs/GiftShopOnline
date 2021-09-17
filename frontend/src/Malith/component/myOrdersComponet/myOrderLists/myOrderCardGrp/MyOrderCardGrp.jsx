import React from 'react'
import MyOrderCard from '../myOrderCard/MyOrderCard'
import DeletedOrder from '../myOrderCard/DeletedOrder'
import CompletedOrder from '../myOrderCard/CompletedOrders'
import {useLocation} from 'react-router-dom'
import Test from './Test'

export default function MyOrderCardGrp() {
    const {search} = useLocation();

    return (
        
        <div>
                <h4 className="mt-1">My Orders</h4>
                <div className="row p-3">
                <div className="card mb-5n p-0">
                    <div className="container-fluid" style={{backgroundColor:"#f2f2f2", border:"1px"}}>
                    <div className="row">

                        <div className="col-xl-3 col-sm-4 col-12">
                        {search !=="?cat=ordanalytic" && <div class="btn-group AcatDropDownBtn">
                    <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Sort by Date
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                    </div>}
                        </div>
                    </div>
                    <Test/>

                        </div> 
            </div>
            </div>
            </div>
    )
}
