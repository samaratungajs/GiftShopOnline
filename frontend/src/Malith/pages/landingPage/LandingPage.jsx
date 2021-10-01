import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
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

export default function LandingPage(){
    const [deals, setdeals] = useState([]);
    const [arrivals, setarrivals] = useState([]);

    useEffect(() => {
        document.body.style.backgroundColor = "#ffffff"
        
        fetchDeals();
        fetchArrivals();

    }, [])

    const fetchDeals = async () =>{
        const res = await axios.get("/abuyer/getspecialdeals");
        setdeals(res.data)
    }

    const fetchArrivals = async () =>{
        const res = await axios.get("/abuyer/getnewarrivals");
        setarrivals(res.data)
    }

        return (
            <>

<Topbar/>
      <Navbar/>
      <Header/>
      <CategoryCard/>
      <DealsCardGrp dlist={deals}/>
      <MidBanner/>
      <ArrivalGrp alist={arrivals}/>
      <BrandLabels/>
      <CustReview/>
      <BottomBar/>
      <Footer/>
                
            </>
        )
    }

