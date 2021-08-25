import React, { Component } from 'react'
import CatSidebar from '../../component/SearchPageComponent/ctegorySidebar/CatSidebar'
import Topbar from '../../component/LandingPageComponent/topbar/Topbar'
import ProductCardGrp from '../../component/SearchPageComponent/productList/productListGrp/ProductCardGrp'
import Footer from '../../component/LandingPageComponent/footer/Footer'
import BrandCard from '../../component/SearchPageComponent/brandCard/BrandCard'

export default class SearchPage extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#e8e8e8"
    }
    render() {
        return (
            <>
              <Topbar/>

              <div class="container-fluid">
  <div class="row">
    <div class= "main col-lg-2">
         <div class="well"><CatSidebar/><BrandCard/></div>   
    </div> 
    <div class="sidebar col-lg-10">
         <div class="well"><ProductCardGrp/></div>
   </div>
  </div>
</div>
<Footer/>

            </>
        )
    }
}
