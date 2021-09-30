import React from 'react';
import MUIDataTable, { TableBodyCell, TableBodyRow } from 'mui-datatables';
import Nav from "../components/Navbar"
import TopNav from "../components/topNav";
import axios from 'axios';

class AdvFilter extends React.Component {
  state = {
    columns: ['Product','Supplier', 'Category', 'Brand', 'Stock', 'Expected Income'],
    data:[],
    brand:'',
    category:'',
    wholesalePrice:'',
    discountPItem:'',
    quantity:'',
    pricePItem:'',
    items:[],
    supi:[]
  }

  componentDidMount(){
    axios.get('http://localhost:9999/productmanager/getall')
    .then(response => {
      this.setState({items : response.data.data })
        this.state.items.map((item) => {
          this.setState({supi : [item.productName,item.supplier,item.category, item.brand,item.quantity+' items','  '+item.wholesalePrice*item.quantity+' LKR'] })
          console.log(this.state.supi )
          this.state.data.push(this.state.supi);
        });
        console.log(this.state.data )
    })
  }

  render() {
    const { columns, data } = this.state;
    const options = {
      filterType: 'dropdown',
      responsive: 'stacked',
      print: true,
      rowsPerPage: 10,
      page: 1
    };
    return (

      
      <div className="row bg-secondary bg-opacity-10">
            <div className="col col-lg-2"><Nav/></div>
            <div className="col mb-5 ">
              <TopNav/>
            <div className="m-5 ">
              <h3 align="center" ></h3>
              <MUIDataTable
                title="Gift Items Statistics Report"
                data={data}
                columns={columns}
                options={options}
            />
            </div>
            </div>
          </div>

    );
  }
}

export default AdvFilter;