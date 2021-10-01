import React, { Component, useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import { render } from 'react-dom';

export default function OrderGraph({dates,amounts}) {


    return (
        <div>
          <h2 className="text-center my-3" style={{color:"blue"}}>Order by Month</h2>
            <Line
              data={{
                labels: dates,
                datasets: [{
                    label: 'Total Amount',
                    borderColor:"#14a5ff",
                    data: amounts,
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
