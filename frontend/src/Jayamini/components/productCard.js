import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'

class eCommercePage extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

  }
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
  productName:''
}

componentDidMount(){
  axios.get('http://localhost:9999/productmanager/getall')
  .then(response => {
      this.setState({items : response.data.data })
  })
}

handleDeleteItem = (item) => {
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
    status: 'archive'
  }
  console.log(giftItem)
  axios.post('http://localhost:9999/productmanager/archive', giftItem)
  .then(response => {
    store.addNotification({
      title: "Gift Item Moved",
      message: "to archive",
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

onArchive(e) {
  window.location=`/archive`
}

onChange(e){
  this.setState({ [e.target.name]: e.target.value });
  axios.get(`http://localhost:9999/productmanager/getitem/${this.state.productName}`)   
  .then(response => {
    this.setState({items : response.data.data })
  })

}
handleChange =(files)=>{
  this.setState({
    files:files
  })
}
onClear() {
  window.location.reload(false);
}


handleEditItem = (id) => {
  window.location=`/editgift/${id}`
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
        
          <MDBTooltip placement="top"> <button className="btn btn-dark m-1" > <i class="fas fa-trash-alt"></i> </button>
          <div>MDBTooltip on top</div>
          </MDBTooltip>
        </div>
       
        }
      )
    });

    return (
    <MDBRow className="my-2" center>
       <ReactNotification/>
      <MDBCard className="w-100 ">
        <MDBCardBody>
        <div align="right" >  
        <div class="input-group mb-2 w-25" >
                <input type="text" class="form-control" name="productName" value={this.state.productName} onChange={this.onChange} placeholder="Search Items" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                <button type="button" class="btn btn-primary" onClick={this.onChange}>
                    <i class="fas fa-search"></i>
                  </button>
                  <button onClick={this.onArchive} className="btn  btn-primary m-1" data-toggle="tooltip" data-placement="top" title="View archive"> <i class="fa fa-archive"></i> </button>
                </div>
              </div>         
                  </div>
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
              <th>Actions</th>
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
              <td className="pt-4"><div><button onClick={this.handleEditItem.bind(this, item._id)} className="btn btn-dark m-1" data-toggle="tooltip" data-placement="top" title="Edit"> <i class='fas fa-pencil-alt'></i> </button> 
              <button className="btn btn-danger m-1" data-toggle="tooltip" data-placement="top" title="Remove" onClick={() => this.handleDeleteItem(item)} > <i class="fas fa-trash-alt"></i> </button></div></td>
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