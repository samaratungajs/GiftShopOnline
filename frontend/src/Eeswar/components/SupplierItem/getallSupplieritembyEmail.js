import React, { Component} from 'react';
import axios from 'axios';
import Navbar from '../SideNavbar/Navbar';
import './table.css'
import Header from './header'

class ViewSupplierItems extends Component {
    constructor(props){
        super(props);
        this.state ={
            Items:[],
            headers:[
                { ProductName: 1, Brand: 'Watches', Description: 2100, Quantity: 3,Price:6300.00,Status:"Unapprove",Action:"" }
            ],
            search:''

        }

        
    }

    componentDidMount(){
        console.log(this.props.Email);
        axios.get(`http://localhost:9999/supplieritems/${this.props.Email}`)
        .then(response => {
            this.setState({Items : response.data.data })
            console.log(this.state.Items);
        }).catch(error => {
            alert('error.message');
        })
    }
    
    handleEditAdmin = (id) => {
        window.location=`/supplier/edit/${id}`
    }
    
    handleDeleteAdmin = (item) => {
        axios.delete(`http://localhost:9999/supplieritems/delete/${item._id}`)   
        .then(response=>{
            alert('item Removed');
            this.componentDidMount();
        }).catch(error=>{
            console.log(error.message);
            alert(error.message);
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.headers[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
    
     renderTableData() {
      
        const{search} = this.state;

        const searchItems = this.state.Items.filter(item=>{
             return item.productName.toLowerCase().indexOf(search.toLowerCase()) !== -1               
      })
        

      return searchItems.map((item, index) => {
         
         return (
            <tr key={index}>
               <td>{item.productName}</td>
               <td>{item.brand}</td>
               <td>{item.description}</td>
               <td>{item.quantity}</td>
             <td>{item.pricePItem}</td>
             <td>{item.status}</td>
             <td><button className="btn btn-dark m-1" onClick={this.handleEditAdmin.bind(this, item._id)}> Update </button>
                <button className="btn btn-dark m-1" onClick={() => this.handleDeleteAdmin(item)}> Delete </button>
             </td>

            </tr>
         )
      })
    }


    onChange = e =>{
        this.setState({search : e.target.value})
    }




    render(){
        
        
        return(
            <div>
                <Header/>
            <div className="row" >
            <div className="col col-lg-2"><Navbar/></div>
            <div className="col">
        
            <div>  
            <br/>
            <div align='center'>
           <input type="search" placeholder="Search Items" className="prompt" onChange={this.onChange} />
           <i className="search icon"></i>
           </div>
           <br/>
          
           <div>
            <h1 id='title'></h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
         </div>


            </div>
            </div>
            </div>
        )
    }
}

export default ViewSupplierItems;