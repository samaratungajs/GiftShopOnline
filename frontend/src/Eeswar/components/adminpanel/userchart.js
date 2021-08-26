import React from "react";
import { Doughnut } from "react-chartjs-2";
import axios from 'axios';
import AdminPanel from './adminpanelNavigationbar';
import TopNav from './topNav'

class Usercharts extends React.Component {
  constructor(props){
    super(props);
    this.state = {

        totalUser: 0,
        totalBuyer: 0,
        totalSupplier: 0,
        

      
      dataDoughnut: {
        labels: ["User", "Buyer","Supplier"],
        datasets: [
          {
            data: [0, 0,0],
            backgroundColor: ["#F7464A", "#FF851B","#2ECC40"],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#FF851B",
              "#2ECC40"      
            ]
          }
        ]
      }
    }
}


componentDidMount(){
  axios.get('http://localhost:9999/admin/totaluser')
  .then(response => {
      this.setState({totalUser : response.data.data })
        
      axios.get('http://localhost:9999/admin/totalbuyer')
      .then(response => {
        this.setState({totalBuyer : response.data.data })
        
        axios.get('http://localhost:9999/admin/totalsupplier')
        .then(response => {
          this.setState({totalSupplier : response.data.data })
  

      this.setState({dataDoughnut : {
        labels: ["User", "Buyer","Supplier"],
        datasets: [
          {
            data: [this.state.totalUser,this.state.totalBuyer,this.state.totalSupplier ],
            backgroundColor: ["#F7464A", "#FF851B","#2ECC40"],
            hoverBackgroundColor: [
                "#FF5A5E",
                "#FF851B",
                "#2ECC40"
            ]
          }
        ]
      }})
      console.log(response.data.data)
      
    })
      
    })
  })

}

render() {
    return (
        <div>
            <TopNav/>
      <div className="row">
      <div className="col col-lg-2"><AdminPanel/></div>
      <div className="col">
            <br/><br/>
        <div align="centrer" class="container-sm w-50">
        <div class="col">        
            <div className="card mb-3">
            <h5 class="card-title" align="center">User Revenue</h5>
          <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
          </div>
        </div>
        
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Usercharts;