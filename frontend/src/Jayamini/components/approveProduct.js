import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'
import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
class eCommercePage extends Component {
state = {
  data: [
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg",
        title: "iPhone",
        subTitle: "Apple",
        color: "White",
        price: "800",
        qty: "2"
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg",
        title: "Headphones",
        subTitle: "Sony",
        color: "Red",
        price: "200",
        qty: "2"
      },
      {
        src: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg",
        title: "iPad Pro",
        subTitle: "Apple",
        color: "Gold",
        price: "600",
        qty: "1"
      },
    ],
    columns: [
      {
        label: <strong>Product</strong>,
        field: 'img',
      },
      {
        label: <strong></strong>,
        field: 'product'
      },
      {
        label: <strong>Brand</strong>,
        field: 'color'
      },
      {
        label: <strong>Category</strong>,
        field: 'price'
      },
      {
        label: <strong>Quantity</strong>,
        field: 'pr'
      },
      {
        label: <strong>Price per Item</strong>,
        field: 'pri'
      },
      {
        label: <strong>Wholesale Price</strong>,
        field: 'qty'
      },
      {
        label: <strong>Discount</strong>,
        field: 'amount'
      },
      {
        label: <strong>Actions</strong>,
        field: 'button'
      }
  ],
  items:[]
}

componentDidMount(){
  axios.get('http://localhost:9999/productmanager/supplieritems')
  .then(response => {
      this.setState({items : response.data.data })
  })
}

handleDeleteItem = (item) => {
  store.addNotification({
    title: "Gift Item",
    message: "Removed",
    type:"warning",
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
  store.addNotification({
    title: "Email sent",
    message: "to supplier",
    type:"warning",
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

handleApproveItem = (item) => {
  store.addNotification({
    title: "Gift Item",
    message: "Accepted",
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
  store.addNotification({
    title: "Email sent",
    message: "to supplier",
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


render() {

    const rows = [];
    const { columns, data } = this.state;

    data.map(row => {
      return rows.push(
        {
        'img': <img src={row.src} alt="" className="img-thumbnail" style={{ width: "100px" }}  />,
        'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.title}</strong></h5>, <p key={new
          Date().getDate} className="text-muted">{row.subTitle}</p>],
        'color': row.color,
        'price': `$${row.price}`,
        'pr': `$${row.price}`,
        'pri': `$${row.price}`,
        'qty': 0,
        // <MDBInput type="number" default={row.qty} className="form-control" style={{ width: "100px" }} />,
        'amount': <strong>${row.qty * row.price}</strong>,
        'button':<div><button className="btn btn-dark m-1" > <i class='fas fa-pencil-alt'></i> </button> 
        <button className="btn btn-dark m-1" > <i class="fas fa-trash-alt"></i> </button></div>
        // <MDBTooltip placement="top">
        //     <MDBBtn color="primary" size="sm">
        //         X
        //     </MDBBtn>
        //     <div>Remove item</div>
        // </MDBTooltip>
        }
      )
    });

    return (
    <MDBRow className="my-2" center>
       <ReactNotification/>
      <MDBCard className="w-100 ">
        
        <MDBCardBody>
        <h3 align="center" className="mb-5 mt-2" >Items Waiting for Approval</h3>
        
          <MDBTable className="product-table">
         
          {/* columns={columns}  */}
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" >
            <tr>
              <th>Product</th>
              <th></th>
              <th>Brand</th>
              <th>Category</th>
              <th>Wholesale Price</th>
              <th>Discount</th>
              <th>Quantity</th>
              <th>Price per Item</th>
              <th >  <h6 className="font-weight-bold" align="center"><strong>Actions</strong></h6></th>
            </tr>
              </MDBTableHead>
            {/* rows={rows} */}
            <MDBTableBody >
            {this.state.items.length > 0 && this.state.items.map((item, index) => (

              <tr key={index}> <td><img src={item.imageURL} alt="" className="img-thumbnail" style={{ width: "100px" }}  /></td>
              <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>{item.productName}</strong></h5><p className="text-muted">{item.supplier}</p></td>
              <td className="pt-4">{item.brand}</td>
              <td className="pt-4">{item.category}</td>
              <td className="pt-4">{item.wholesalePrice} LKR</td>
              <td className="pt-4">{item.discountPItem} %</td>
              <td className="pt-4">{item.quantity}</td>
              <td className="pt-4"><strong>{item.pricePItem} LKR</strong></td>
              <td className="pt-4"><div align="center"><button className="btn btn-success m-1" onClick={() => this.handleApproveItem(item)}>Approve <i class="far fa-check-circle"></i> </button> 
              </div><div align="center">
              
                <button className="btn btn-danger m-1 "  onClick={() => this.handleDeleteItem(item)}> <a className="text-danger">h</a>  Reject  <i class="fa fa-ban" aria-hidden="true"></i> </button> 
               
                </div></td>
              </tr>
            ))}
            </MDBTableBody >
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>
    );
  }
}

export default eCommercePage;