import React, { Component } from 'react'
import BottomBar from "../../component/LandingPageComponent/bottomBar/BottomBar";
import BrandLabels from "../../component/LandingPageComponent/brandLabels/BrandLabels";
import CategoryCard from "../../component/LandingPageComponent/categories/cardgroup/CategoryCards";
import CustReview from "../../component/LandingPageComponent/customerReview/CustReview";
import DealsCardGrp from "../../component/LandingPageComponent/deals/DealsCardGrp";
import Footer from "../../component/LandingPageComponent/footer/Footer";
import Header from "../../component/LandingPageComponent/header/Header";
import MidBanner from "../../component/LandingPageComponent/midBanner/MidBanner";
import Navbar from "../../component/LandingPageComponent/navbar/Navbar";
import ArrivalGrp from "../../component/LandingPageComponent/newArrivals/newArrivalGrp/ArrivalGrp";
import Topbar from "../../component/LandingPageComponent/topbar/Topbar";

export default class LandingPage extends Component {
    render() {
        return (
            <>

<Topbar/>
      <Navbar/>
      <Header/>
      <CategoryCard/>
      <DealsCardGrp/>
      <MidBanner/>
      <ArrivalGrp/>
      <BrandLabels/>
      <CustReview/>
      <BottomBar/>
      <Footer/>
                
            </>
        )
    }
}
