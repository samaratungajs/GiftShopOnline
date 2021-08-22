import React, { Component } from 'react'; 
import ReactTable from "react-table";
import "./BasicTable.css";


  
class BasicTable extends Component {
  
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
       students: [
          { id: 1, Category: 'Watches', Price: 2100, Quantity: 3,Subtotal:6300.00 },
          { id: 2, Category: 'Cakes', Price: 1900, Quantity: 5,Subtotal:9500.00 },
          { id: 3, Category: 'Perfumes', Price: 1600, Quantity: 3,Subtotal:3800.00 },
          { id: 4, Category: 'Flowers', Price: 2500, Quantity:7,Subtotal:17500.00 }
       ]
    }
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
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
         </div>
        

        
             
        
    )  
  }  
}  
export default BasicTable;  