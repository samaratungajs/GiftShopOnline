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
  items:[],
  supplier:[]
}

componentDidMount(){
  axios.get('http://localhost:9999/productmanager/itemsuppliers')
  .then(response => {
      this.setState({items : response.data.data })
      this.setState({supplier : this.state.items.supplier })
      console.log(response.data.data)
      console.log(this.state.items)
      console.log(this.state.items.supplier)

  })
}

handleDeleteItem = (item) => {
  axios.delete(`http://localhost:9999/productmanager/delete/${item._id}`)   
  .then(response=>{
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
      width: 600,
     
    })
      this.componentDidMount();
  }).catch(error=>{
      console.log(error.message);
      alert(error.message);
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
          <MDBTable className="product-table">
          {/* columns={columns}  */}
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" >
            <tr>
              <th>Product</th>
              <th></th>
              <th>Category</th>
              <th>Wholesale Price</th>
              <th>Discount</th>
              <th>Quantity</th>
              <th>Price per Item</th>
              <th>Supplier</th>
            </tr>
              </MDBTableHead>
            {/* rows={rows} */}
            <MDBTableBody >
            { this.state.items.length > 0 && this.state.items.map((item, index) => (
              
              <tr key={index }> 
                <td><img src={item.imageURL} alt="" className="img-thumbnail" style={{ width: "100px" }}  /></td>
              <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>{item.productName}</strong></h5><p className="text-muted">{item.brand}</p></td>
              <td className="pt-4">{item.category}</td>
              <td className="pt-4">{item.wholesalePrice} LKR</td>
              <td className="pt-4">{item.discountPItem} %</td>
              <td className="pt-4">{item.quantity}</td>
              <td className="pt-4"><strong>{item.pricePItem} LKR</strong></td>
              <td className="pt-4">
              <div >
              { item.supplier.length > 0 && item.supplier.map((sup, index1) => (

                <OverlayTrigger key={index1}
                    placement="bottom"
                    trigger="click"
                    overlay={(
                      <Popover>
                        <Popover.Title as="h3">
                          <strong>{sup.email}</strong>
                        </Popover.Title>
                        <Popover.Content>
                          <h6>{sup.firstName} {sup.lastName}</h6>
                          Contact no:
                          <h> 0{sup.pNumber}</h>
                      </Popover.Content>
                      </Popover>
                    )}>
              <Button variant="success">
              {sup.firstName} <i class="fas fa-caret-down"></i>
              </Button>
                </OverlayTrigger>
               ))}
            </div>
              </td>
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