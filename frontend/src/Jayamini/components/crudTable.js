import React, { Component } from 'react'; 
import ReactTable from "react-table";
import "./crudTable.css";
import axios from 'axios';



  
class BasicTable extends Component {
  
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
       students: [
          { id: 1, Category: 'Watches', Price: 2100, Quantity: 3,Subtotal:6300.00 ,Actions:''},
          { id: 2, Category: 'Cakes', Price: 1900, Quantity: 5,Subtotal:9500.00 ,Actions:'' },
          { id: 3, Category: 'Perfumes', Price: 1600, Quantity: 3,Subtotal:3800.00 ,Actions:''},
          { id: 4, Category: 'Flowers', Price: 2500, Quantity:7,Subtotal:17500.00 ,Actions:''}
       ],
       items:[]
    }
  }
  
  componentDidMount(){
   axios.get('http://localhost:9999/productmanager/getall')
   .then(response => {
       this.setState({items : response.data.data })
   })
}

  renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })

 }

 renderTableData() {
  return this.state.students.map((student, index) => {
     const { id, Category, Price, Quantity,Subtotal } = student //destructuring
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{Category}</td>
           <td>{Price}</td>
         <td>{Quantity}</td>
         <td>{Subtotal}</td>
         <td><button className="btn btn-dark m-1" > <i class='fas fa-pencil-alt'></i> </button> 
         <button className="btn btn-dark m-1" > <i class="fas fa-trash-alt"></i> </button></td> 
         

        </tr>
     )
  })
}



  render() {  
    
    return (  
          <div>  
           
           <div>
            <h1 id='title'></h1>
            <table id='students'>
               <tbody>
                  <tr>
                     <th >Item</th>
                     <th >Item</th>
                     <th >Item</th>
                     <th >Item</th>
                     <th >Item</th>
                  </tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
         </div>
        

        
             
        
    )  
  }  
}  
export default BasicTable;  