import React from 'react'
import {Line} from 'react-chartjs-2'
import './orderAnalytic.css'
export default function LineChart() {
    return (
        <div className="container-fluid p-0 ">
          <h3 className="text-center my-3">Order Analytics</h3>




          <div className="row px-2 py-3">
      <div className="card p-1">
          <div class="d-flex justify-content-between align-items-center">
          <div class="d-inline-flex">
                    <h5 className="h-4 pt-2 mx-2">Duration </h5>
                    <input type="date" placeholder="0" min="0" max="120000" className="ApriceRangeBox"/><b className="mt-2">-</b>
                    <input type="date" placeholder="0" min="0" max="120000" className="ApriceRangeBox" style={{marginLeft:"8px"}}/>
                </div>
                <div className="d-inline-flex">
                    
  <button type="button" class="btn btn-warning my-2 text-white">
    Generate Report
  </button>
</div>

                
</div>

                </div>
  </div>






<div class="row mb-5">
    <div class="col-md-3">
      <div class="Acard-counter primary">
        <i class="fa fa-shopping-cart"></i>
        <span class="ANcount-numbers">LKR 12,000</span>
        <span class="ANcount-name">Total Amount</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="Acard-counter danger">
        <i class="fa fa-ticket"></i>
        <span class="Acount-numbers">75</span>
        <span class="Acount-name">All Orders</span>
        </div>
    </div>

    <div class="col-md-3">
      <div class="Acard-counter success">
        <i class="fa fa-database"></i>
        <span class="Acount-numbers">40</span>
        <span class="Acount-name">Completed Orders</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="Acard-counter info">
        <i class="fa fa-users"></i>
        <span class="Acount-numbers">35</span>
        <span class="Acount-name">Pending Orders</span>
      </div>
    </div>
    </div>

          
            <Line
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Total Amount',
                    borderColor:"#14a5ff",
                    data: [5500, 1500, 3900, 2900, 1000, 950],
                    backgroundColor:"rgba(255, 69, 103, 0.6)",
                    fill: 'start'
                },
            ],

            options: {
                responsive: true,
                interaction: {
                  mode: 'index',
                  intersect: false,
                },
                stacked: false,
                plugins: {
                  title: {
                    display: true,
                    text: 'Chart.js Line Chart - Multi Axis'
                  }
                },
                scales: {
                  y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                  },
                  y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
            
                    // grid line settings
                    grid: {
                      drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                  },
                }
              },
            }
           }
           height={200}
           width={400}
            
            />
        </div>
    )
}
