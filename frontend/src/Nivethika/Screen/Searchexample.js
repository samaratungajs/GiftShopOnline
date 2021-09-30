
import React from 'react';
import ReactToPrint from 'react-to-print';
import { render } from 'react-dom';
import axios from 'axios';
import Search from './Searchexample';




export class Searchexample extends React.PureComponent {
    constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.globalSearch = this.globalSearch.bind(this);
      this.handleChange = this.handleChange.bind(this);
         this.state = { //state is by default an object
           tot: 0,
           filter:'',
            items: [],
           options: [],
           filteredData: [],
           searchInput: "",
           name: [],
           first: this.props.first,
            second:this.props.second
          
        }
      }


  
  componentDidMount() {
    let sub = {
      first: new Date(this.state.first).toDateString() + "",
      second: new Date(this.state.second).toDateString() + ""
    }
    console.log(sub);
            axios.post(`http://localhost:9999/pay/two`,sub)
               .then(response => {
                   console.log(response.data.data);
                   this.setState({ options: response.data.data })
                   console.log(this.state.options);
               
               
       }).catch(error => {
          
           console.log(error.message);
           alert(error.message);
      
       })
            
            
         
         
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
    });
  };
  
  globalSearch = () => {
    let { searchInput, options } = this.state;
    let filteredData = options.filter(value => {
    return (
        value.username.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.status.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.username
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });
    this.setState({ filteredData });
};



    render() {
     

      return (
        <div>

          Search:<input type="text" name="searchInput"  onChange={this.handleChange} placeholder="Search product or user"/>
         
   
       <table id='students'>
         <thead>
           <th>username</th>
           <th>Date Purchased</th>
                 <th>Total payment</th>
                 <th>Products Purchased</th>
                 <th></th>
               
           
         </thead>
         <tbody>
       
              {this.state.filteredData.length > 0 && this.state.filteredData.map((item, index) => (
       
                       <tr>
              <td>{item.username}</td>
         <td>{item.Date}</td>
           <td>{item.amount}</td>
         
           { item.orderitems.length > 0 && item.orderitems.map((item, index) => (
              <td>{item.productName} </td>
                
              ))}
               
              
               
       
               
               
               </tr>
               
 
              ))}
                 
              
            

         </tbody>
          </table>
          </div>
     );
      
       
   }
}
 









export default Searchexample;