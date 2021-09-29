import React, { Component } from 'react';
import axios from 'axios';
import Nav from "../SideNavbar/Navbar"
import firebase from "./firebase";
import Header from './header'



class AddSupplierItems extends Component {
    
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        document.body.classList.add("no-sroll");
        this.state = {
            productName: '',
            brand: '',
            supplier: this.props.Email,
            category: '',
            description: '',
            quantity: 0,
            pricePItem: 0,
            wholesalePrice: 0,
            imgURL: '',
            discountPItem: 0,
            deliveryCpItem: 0,
            status: "unapproved",
            files: ''

        }


    }

    handleChange = (files) => {
        this.setState({
            files: files
        })
    }

    handleUpload = () => {
        let bucketName = 'images'
        let file = this.state.files[0]
        let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
        let uploadTask = storageRef.put(file)
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            () => {
                let downloadURL = uploadTask.snapshot.downloadURL
            })

    }

    showIMG = () => {
        let storageRef = firebase.storage().ref()
        let spaceRef = storageRef.child('images/' + this.state.files[0].name)
        storageRef.child('images/' + this.state.files[0].name).getDownloadURL().then((url) => {
            console.log(url)
            this.setState({
                imgURL: url
            })
            document.getElementById('new-img').src = url

        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let storageRef = firebase.storage().ref()
        let spaceRef = storageRef.child('images/' + this.state.files[0].name)
        storageRef.child('images/' + this.state.files[0].name).getDownloadURL().then((url) => {
            console.log(url)
            this.setState({
                imgURL: url
            })
           
            let giftItem = {
                productName: this.state.productName,
                brand: this.state.brand,
                supplier: this.state.supplier,
                category: this.state.category,
                description: this.state.description,
                quantity: this.state.quantity,
                pricePItem: this.state.pricePItem,
                wholesalePrice: this.state.wholesalePrice,
                discountPItem: this.state.discountPItem,
                deliveryCpItem: this.state.deliveryCpItem,
                imageURL: this.state.imgURL,
                status: this.state.status


            }
            console.log('Data to send', giftItem);
            axios.post('http://localhost:9999/productmanager/create', giftItem)
                .then(response => {
                    alert('Item successfully added');
                }).catch(error => {
                    console.log(error.message);
                    alert(error.message);
                })

        })




    }

    render() {
        return (
            <div>
                 <Header/>
               
            <div className="row">
                <div className="col col-lg-2"><Nav /></div>
                <div className="col">

                    <div class="col-md-8 offset-md-2">
                        <br />

                        <div class="card card-outline-secondary  text-dark">
                            <div class="card-body">
                                <h3 class="text-center">Add New Gift Items</h3>

                                <div >
                                    <div class="col-12 ">
                                        <label for="inputEmail4" class="form-label">Product Name</label>
                                        <input type="text" class="form-control" id="productName" name="productName" value={this.state.productName} onChange={this.onChange} />
                                    </div>
                                    <div class="col-12">
                                        <label for="inputEmail4" class="form-label">Product Brand</label>
                                        <input type="email" class="form-control" id="brand" name="brand" value={this.state.brand} onChange={this.onChange} />
                                    </div>
                                    <div class="col-12">
                                        <label for="inputState" class="form-label">Product Category</label>
                                        <select id="category" class="form-select" name="category" value={this.state.category} onChange={this.onChange}>
                                            <option selected>Choose...</option>
                                            <option value="cakes">Cakes</option>
                                            <option value="watches">Watches</option>
                                            <option value="flowers">Flowers</option>
                                            <option value="perfume">Perfume</option>

                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputEmail4" class="form-label">Quantity</label>
                                        <input type="Number" class="form-control" id="quantity" name="quantity" value={this.state.quantity} onChange={this.onChange} />
                                    </div>

                                    <div class="col-12">
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
                                    </div>

                                    <div class="col-12">
                                        <label for="inputEmail4" class="form-label">Delivery Charge per Item</label>
                                        <input type="Number" class="form-control" id="deliveryCpItem" name="deliveryCpItem" value={this.state.deliveryCpItem} onChange={this.onChange} />
                                    </div>

                                    <div class="col-12">
                                    <label for="floatingTextarea" >Product Description</label>
                                    <div class="form-floating">

                                        <textarea class="form-control" id="floatingTextarea" name="description" value={this.state.description} onChange={this.onChange}></textarea>

                                    </div>
                                    </div>
                                    <div class="col-12 p-2">
                                        <input type="file" onChange={(e) => { this.handleChange(e.target.files) }} />
                                        <button onClick={this.handleUpload}>Upload</button>
                                        <button onClick={this.showIMG}>Show</button>
                                        
                                        <div class='container'>
                                        <img id="new-img" />
                                        </div>

                                        <h6></h6>
                                    </div>



                                    <div class="col-12">
                                        <div class="d-flex justify-content-center ">
                                            <button type="submit" onClick={this.onSubmit} class="btn btn-info">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div> 

        )
    }
}



export default AddSupplierItems;