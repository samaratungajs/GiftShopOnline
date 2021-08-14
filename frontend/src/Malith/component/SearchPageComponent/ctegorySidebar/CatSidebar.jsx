import React, { Component } from 'react'
import "./ctegorySidebar.css"
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'

export default class CatSidebar extends Component {
            constructor(props) {
            super(props);
            this.state = { 
                cssCake:"",
                cssFlower:"",
                cssPerfume:"",
                cssWatch:"",
                curClass:"w3-bar-item w3-button AcatCardText"
             }
       
    }

    hover1=()=>{
        this.setState({cssFlower:"",cssWatch:"",cssPerfume:""})
        this.setState({cssCake: "w3-bar-item w3-button tablink w3-cyan"});
    }
    hover2=()=>{
        this.setState({cssFlower:"",cssWatch:"",cssCake:""})
        this.setState({cssPerfume: "w3-bar-item w3-button tablink w3-cyan"});
    }
    hover3=()=>{
        this.setState({cssFlower:"",cssPerfume:"",cssCake:""})
        this.setState({cssWatch: "w3-bar-item w3-button tablink w3-cyan"});
    }

    hover4=()=>{
        this.setState({cssWatch:"",cssPerfume:"",cssCake:""})
        this.setState({cssFlower: "w3-bar-item w3-button tablink w3-cyan"});
    }
     
    render() {
        return (
<div>  
                    <div className=" card w3-tab w3-light- AfixedCatCard w3-card ml-5" style={{maxHeight:"300px", backgroundColor:"white", marginTop:"38px"}}>
                    <h6 className="card-header text-center"><b>Categories</b></h6>  
                    <button className={this.state.cssCake?this.state.cssCake:this.state.curClass} onClick={this.hover1}>CAKES</button>
                    <button className={this.state.cssPerfume?this.state.cssPerfume:this.state.curClass} onClick={this.hover2}>PERFUMES</button>
                    <button className={this.state.cssWatch?this.state.cssWatch:this.state.curClass} onClick={this.hover3}>WATCHES</button>
                    <button className={this.state.cssFlower?this.state.cssFlower:this.state.curClass} onClick={this.hover4}>FLOWERS</button>
                    </div>


                    <div className="container p-0">
                        <div className="card AbrandCard">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={img1} alt="" className="AcatbrandLogo" style={{maxWidth:"100px"}}/>
                            </div>
                            <div className="col-sm-6">
                            <img src={img2} alt="" className="AcatbrandLogo" style={{maxWidth:"100px"}}/>
                            </div>

                            <div className="col-sm-6">
                                <img src={img3} alt="" className="AcatbrandLogo" style={{maxWidth:"100px"}}/>
                            </div>
                            <div className="col-sm-6">
                            <img src={img4} alt="" className="AcatbrandLogo" style={{maxWidth:"100px"}}/>
                            </div>

                            <div className="col-sm-6">
                                <img src={img5} alt="" className="AcatbrandLogo" style={{maxWidth:"100px"}}/>
                            </div>
                            <div className="col-sm-6">
                            <img src={img6} alt="" className="AcatbrandLogo" style={{maxWidth:"100px"}}/>
                            </div>

                            </div>
                    
                    </div>

                    </div>

            </div>
        )
    }
}
