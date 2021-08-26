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
  axios.get('http://localhost:9999/productmanager/getall')
  .then(response => {
      this.setState({items : response.data.data })
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

              <tr> <td><img src="https://www.wishque.com/data/images/products/6418/66712823_881971531030_0.30123800-1584079691.jpg" alt="" className="img-thumbnail" style={{ width: "100px" }}  /></td>
              <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>Glamorous Blush</strong></h5><p className="text-muted">Lassana flora</p></td>
              <td className="pt-4">Flowers</td>
              <td className="pt-4">4500 LKR</td>
              <td className="pt-4">10 %</td>
              <td className="pt-4">39</td>
              <td className="pt-4"><strong>4900 LKR</strong></td>
              <td className="pt-4">
              <div ><OverlayTrigger
                    placement="bottom"
                    trigger="click"
                    overlay={(
                      <Popover>
                        <Popover.Title as="h3">
                          <strong>niyaz78@lassanaflora.lk</strong>
                        </Popover.Title>
                        <Popover.Content>
                          <h6>Niyaz Rafeek</h6>
                          Contact no:
                          <h> 0715231414</h>
                      </Popover.Content>
                      </Popover>
                    )}>
              <Button variant="success">
              Lassana Flora <i class="fas fa-caret-down"></i>
              </Button>
                </OverlayTrigger>
              </div>
              </td>
             </tr>

              <tr> <td><img src="https://www.wishque.com/data/images/products/2342/92288666_435879936648_0.92559300-1571883184.jpg" alt="" className="img-thumbnail" style={{ width: "100px" }}  /></td>
              <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>Bouquet of 50 Red Roses</strong></h5><p className="text-muted">Lassana flora</p></td>
              <td className="pt-4">Flowers</td>
              <td className="pt-4">4200 LKR</td>
              <td className="pt-4">5 %</td>
              <td className="pt-4">39</td>
              <td className="pt-4"><strong>4800 LKR</strong></td>
              <td className="pt-4">
              <div ><OverlayTrigger
                    placement="bottom"
                    trigger="click"
                    overlay={(
                      <Popover>
                        <Popover.Title as="h3">
                          <strong>niyaz78@lassanaflora.lk</strong>
                        </Popover.Title>
                        <Popover.Content>
                          <h6>Niyaz Rafeek</h6>
                          Contact no:
                          <h> 0715231414</h>
                      </Popover.Content>
                      </Popover>
                    )}>
              <Button variant="success">
              Lassana Flora <i class="fas fa-caret-down"></i>
              </Button>
                </OverlayTrigger>
              </div>
              </td>
              </tr>

              <tr> <td><img src="https://www.wishque.com/data/images/products/2924/92136758_788721163239_0.62696600-1512959677.png" alt="" className="img-thumbnail" style={{ width: "100px" }}  /></td>
              <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>Britney Spears Fantasy 30ml</strong></h5><p className="text-muted">Fantasiya</p></td>
              <td className="pt-4">Perfumes</td>
              <td className="pt-4">5990 LKR</td>
              <td className="pt-4">0 %</td>
              <td className="pt-4">40</td>
              <td className="pt-4"><strong>6050 LKR</strong></td>
              <td className="pt-4">
              <div ><OverlayTrigger
                    placement="bottom"
                    trigger="click"
                    overlay={(
                      <Popover>
                        <Popover.Title as="h3">
                         <strong>namalmg98@britten.lk</strong> 
                        </Popover.Title>
                        <Popover.Content>
                          <h6>Namal Gamage</h6>
                          Contact no:
                          <h> 0715231414</h>
                      </Popover.Content>
                      </Popover>
                    )}>
              <Button variant="success">
              Britten.LK <i class="fas fa-caret-down"></i>
              </Button>
                </OverlayTrigger>
              </div></td>
              </tr>

              <tr> <td><img src="https://www.wishque.com/data/images/products/6025/27641258_729740662293_0.17958800-1579264820.jpg" alt="" className="img-thumbnail" style={{ width: "100px" }}  /></td>
              <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>Danish Design Ladies' Watch</strong></h5><p className="text-muted">Danish Design</p></td>
              <td className="pt-4">Watches</td>
              <td className="pt-4">40000 LKR</td>
              <td className="pt-4">5 %</td>
              <td className="pt-4">200</td>
              <td className="pt-4"><strong>40499 LKR</strong></td>
             <td className="pt-4">
             <div ><OverlayTrigger
                    placement="bottom"
                    trigger="click"
                    overlay={(
                      <Popover>
                        <Popover.Title as="h3">
                        <strong>dylanmszkiz@gmail.com</strong> 
                        </Popover.Title>
                        <Popover.Content>
                        <h6>Dylanmsz Nafeek</h6>
                          Contact no:
                          <h> 0714231234</h>
                      </Popover.Content>
                      </Popover>
                    )}>
              <Button variant="success">
              Dylan Wang <i class="fas fa-caret-down"></i>
              </Button>
                </OverlayTrigger>
              </div>
             </td>
               </tr>

              <tr> <td><img src="https://www.wishque.com/data/images/products/8481/70844314_312497396021_0.01975000-1629263903.jpg" alt="" className="img-thumbnail" style={{ width: "100px" }}  /></td>
              <td><h5 className="mt-3" style={{ width: "155px" }} ><strong>IBSO Ladies Quartz Rose Gold Watch And Jewelry Gift Set</strong></h5><p className="text-muted">IBSO</p></td>
              <td className="pt-4">Watches</td>
              <td className="pt-4">11500 LKR</td>
              <td className="pt-4">5 %</td>
              <td className="pt-4">119</td>
              <td className="pt-4"><strong>11999 LKR</strong></td>
              <td className="pt-4">
              <div ><OverlayTrigger
                    placement="bottom"
                    trigger="click"
                    overlay={(
                      <Popover>
                        <Popover.Title as="h3">
                        <strong>mitzuisales@gmail.com</strong>  
                        </Popover.Title>
                        <Popover.Content>
                        <h6>Mitzui Kiyal</h6>
                          Contact no:
                          <h> 0714231234</h>
                      </Popover.Content>
                      </Popover>
                    )}>
              <Button variant="success">
              Mitzu LK <i class="fas fa-caret-down"></i>
              </Button>
                </OverlayTrigger>
              </div>
              </td>
               </tr>


            </MDBTableBody >
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>
    );
  }
}

export default eCommercePage;