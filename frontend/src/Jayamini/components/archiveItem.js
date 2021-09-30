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

componentDidMount(){
  axios.get('http://localhost:9999/productmanager/archiveitems')
  .then(response => {
      this.setState({items : response.data.data })
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

handleRestoreItem = (item) => {
  let giftItem = {
    productName: item.productName,
    brand: item.brand,
    supplier: item.supplier,
    category: item.category,
    description: item.description,
    quantity: item.quantity,
    pricePItem: item.pricePItem,
    wholesalePrice: item.wholesalePrice,
    discountPItem: item.discountPItem,
    deliveryCpItem: item.deliveryCpItem,
    imageURL: item.imageURL,
    status: 'approved'
  }
  console.log(giftItem)
  axios.post('http://localhost:9999/productmanager/create', giftItem)
  .then(response => {
    store.addNotification({
      title: "Gift Item ",
      message: "Restored",
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
    axios.delete(`http://localhost:9999/productmanager/deletearchive/${item._id}`)   
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
          duration: 3000,
          showIcon:true
        },
        width: 400,
       
      })
        this.componentDidMount();
    }).catch(error=>{
        console.log(error.message);
        alert(error.message);
    })
  }).catch(error => {
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
      <MDBCard className="w-100 bg-secondary bg-opacity-10">
        
        <MDBCardBody>
        <h3 align="center" className="mb-4 mt-2" >Archived Gift Items</h3>
        
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
              <td className="pt-4"><div align="center"><button className="btn btn-success m-1" onClick={() => this.handleRestoreItem(item)}>Restore <i class="fas fa-trash-restore"></i> </button> 
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