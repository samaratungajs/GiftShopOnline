import React, { Component } from 'react';
import ReactTable from "react-table";
import "./BasicTable.css";
import axios from 'axios';



class BasicTable extends Component {

   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object

         items: [],
         options: [],
         name: [],
         students: [
            { id: 1, Category: 'Watches', Price: 2100, Quantity: 3, Subtotal: 6300.00 },

         ]
      }
   }


   componentDidMount() {
      axios.get(`http://localhost:9999/pay/paymenttable`)
         .then(response => {
            console.log(response.data.data)
            let data = [];
            this.setState({ items: response.data.data }, () => {
               this.state.items.map((item, index) => {

                  data.push(item.orderitems)
               });
               this.setState({ options: data }, () => {
                  this.state.options.map((item, index) => {
                     console.log(item.productName)
                     this.setState({ name: item.productName })
                  })
               })
               console.log(this.state.options)

            })


         }).catch(error => {

            console.log(error.message);
            alert(error.message);

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
         const { _id, orderitems, username } = student //destructuring
         return (


            <tr key={_id}>
               <td>{this.state.name}</td>
               <td>{student.username}</td>

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
                    {/*render table header*/}
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