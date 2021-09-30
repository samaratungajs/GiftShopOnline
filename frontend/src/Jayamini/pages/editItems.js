import React, { Component } from 'react';
import axios from 'axios';
import Nav from "../components/Navbar"
// import { storage } from "../components/imageUpload";
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'
import firebase from "../../Eeswar/components/SupplierItem/firebase";
import TopNav from "../components/topNav";


// import { render } from "react-dom";
// import { storage } from "./firebase";
class Researcher extends Component {
  constructor(props) {
    super(props);

   
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    document.body.classList.add("no-sroll");
    this.state = {
      productName: '',
      brand: '',
      supplier: "giftery imports",
      category: '',
      description:'',
      quantity: 0,
      pricePItem: 0,
      wholesalePrice: 0,
      imgURL: '',
      discountPItem:0,
      deliveryCpItem: 0,
      status: "approved",
      files: ''

    }


  }

  componentDidMount(){
    axios.get(`http://localhost:9999/productmanager/getoneitem/${this.props.match.params.id}`)
    .then(response => {
        this.setState({productName : response.data.data.productName})
        this.setState({brand: response.data.data.brand})
        this.setState({supplier: response.data.data.supplier})
        this.setState({category: response.data.data.category})
        this.setState({description: response.data.data.description})
        this.setState({quantity: response.data.data.quantity})
        this.setState({pricePItem: response.data.data.pricePItem})
        this.setState({wholesalePrice: response.data.data.wholesalePrice})
        this.setState({discountPItem: response.data.data.discountPItem})
        this.setState({deliveryCpItem: response.data.data.deliveryCpItem})
        this.setState({imgURL: response.data.data.imageURL})
        this.setState({status: response.data.data.status})

        console.log(response.data.data.productName)
    })
}
  
 handleChange =(files)=>{
    this.setState({
      files:files
    })
 }

 handleUpload =()=>{
   let bucketName ='images'
   let file = this.state.files[0]
   let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
   let uploadTask = storageRef.put(file)
   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    ()=>{
      let downloadURL = uploadTask.snapshot.downloadURL
      
    })
    store.addNotification({
      title: "Image Upload",
      message: "Success",
      type:"success",
      container: "top-right",
      insert: "top",
      animationIn: ["animated", "fadein"],
      animationOut: ["animated", "fadeout"],
      
      dismiss: {
        duration: 2000,
        showIcon:true
      },
      width: 400,
     
    })
    
 }

 showIMG =()=>{
   let storageRef = firebase.storage().ref()
   let spaceRef = storageRef.child('images/'+this.state.files[0].name)
   storageRef.child('images/'+this.state.files[0].name).getDownloadURL().then((url)=>{
     console.log(url)
     this.setState({
      imgURL:url
    })
     document.getElementById('new-img').src=url
     
   })
 }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClear() {
    window.location.reload(false);
  }

  onSubmit(e) {
    e.preventDefault();
    let storageRef = firebase.storage().ref()
    let spaceRef = storageRef.child('images/'+this.state.files[0].name)
    storageRef.child('images/'+this.state.files[0].name).getDownloadURL().then((url)=>{
      console.log(url)
      this.setState({
       imgURL:url
     })
      // document.getElementById('new-img').src=url
      

      let giftItem = {
        productName: this.state.productName,
        brand: this.state.brand,
        supplier: this.state.supplier,
        category: this.state.category,
        description: this.state.description,
        quantity: this.state.quantity,
        pricePItem: this.state.pricePItem,
        wholesalePrice: this.state.pricePItem-5,
        discountPItem: this.state.discountPItem,
        deliveryCpItem: this.state.deliveryCpItem,
        imageURL: this.state.imgURL,
        status: this.state.status
  
  
      }
      console.log('Data to send', giftItem);
      axios.put(`http://localhost:9999/productmanager/update/${this.props.match.params.id}`, giftItem)
        .then(response => {
          store.addNotification({
            title: "Gift Item Update",
            message: "Success",
            type:"success",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadein"],
            animationOut: ["animated", "fadeout"],
            
            dismiss: {
              duration: 2000,
              showIcon:true
            },
            width: 400,
           
          })
        }).catch(error => {
          console.log(error.message);
          alert(error.message);
        })

    })

   


  }

  render() {
    return (
     
      <div className="row bg-secondary bg-opacity-10">
            <div className="col col-lg-2"><Nav/></div>
            <div className="col mb-3">
              <TopNav/>                <ReactNotification/>

                <div class="col-md-8 offset-md-2">
                    <br />
                    <div>
                    

                    <div class="card card-outline-secondary bg-secondary bg-opacity-95 text-white" style={{paddingLeft:'40px',paddingRight:'40px'}}>
                        <div class="card-body">                      

                            <h3 class="text-center">Edit Gift Item Details</h3>                            

              <div >
                <div class="col-12 ">
                  <label for="inputEmail4" class="form-label">Product Name</label>
                  <input type="text" class="form-control" id="productName" name="productName" value={this.state.productName} onChange={this.onChange} required />
                </div>
                <div class="col-12">
                  <label for="inputEmail4" class="form-label">Product Brand</label>
                  <input type="email" class="form-control" id="brand" name="brand" value={this.state.brand} onChange={this.onChange}  required/>
                </div>
                <div class="col-12">
                  <label for="inputState" class="form-label">Product Category</label>
                  <select id="category" class="form-select" name="category" value={this.state.category} onChange={this.onChange} >
                    <option selected>Choose...</option>
                    <option value="cakes">Cakes</option>
                    <option value="watches">Watches</option>
                    <option value="flowers">Flowers</option>
                    <option value="perfume">Perfume</option>

                  </select>
                </div>
                <div class="col-12">
                  <label for="inputEmail4" class="form-label">Quantity</label>
                  <input type="Number" class="form-control" id="quantity" name="quantity" value={this.state.quantity} onChange={this.onChange}  />
                </div>
                <div className="row">
                <div class="col-md-6">
                  <label for="inputState" class="form-label">Price per Item</label>
                  <input type="Number" class="form-control" id="pricePItem" name="pricePItem" value={this.state.pricePItem} onChange={this.onChange} />

                </div>

                <div class="col-md-6">
                  <label for="inputState" class="form-label">Discount per Item</label>
                  <input type="Number" class="form-control" id="discountPItem" name="discountPItem" value={this.state.discountPItem} onChange={this.onChange} />

                </div>
                </div>
                <div class="col-12">
                  <label for="inputEmail4" class="form-label">Delivery Charge per Item</label>
                  <input type="Number" class="form-control" id="deliveryCpItem" name="deliveryCpItem" value={this.state.deliveryCpItem} onChange={this.onChange} />
                </div>

                <label for="floatingTextarea" >Product Description</label>
                <div class="form-floating">

                  <textarea class="form-control" id="floatingTextarea" name="description" value={this.state.description} onChange={this.onChange}></textarea>

                </div>
                <div class="col-12 pt-3 pb-3">
                <input type="file" onChange={(e)=>{this.handleChange(e.target.files)}} />
                <button type="button" class="btn btn-light" onClick={this.handleUpload}><i class="fa fa-upload" aria-hidden="true"></i></button> 
                {/* <button onClick={this.showIMG}>Show</button>  */}
                <img id="new-img"/>
                <h6></h6>
               </div>


               <div className="row">
                <div class="col-md-6">
                  <div class="d-flex justify-content-center ">
                    <button type="submit" onClick={this.onSubmit} class="btn btn-primary">Submit  <i class="fa fa-check-circle"></i></button>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex justify-content-center ">
                    <button type="submit" onClick={this.onClear} class="btn btn-primary">Clear  <i class="fas fa-sync" ></i> </button>
                  </div>
                </div>
                </div>
              </div>
            </div></div>
          </div>
        </div>
        </div>
      </div>

    )
  }
}

export default Researcher;