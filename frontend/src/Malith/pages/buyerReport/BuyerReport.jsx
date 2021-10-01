import React from 'react'
import './buyerReport.css'
import imgLogo from './images/GifteryLogoGreen.png'
import jsPDF from 'jspdf'
import { useLocation } from "react-router-dom"; 
import Swal from 'sweetalert2';

export default function BuyerReport() {
    const location = useLocation();

    const print = () =>{
        let doc = new jsPDF("p", "pt","c3");
        doc.html(document.querySelector("#AmyOrder"),{
            callback:function(pdf){
                let x;
                for(x=0; x<8; x++){
                let pageCount = doc.internal.getNumberOfPages();
                pdf.deletePage(pageCount);
            }
                pdf.save("My_Order_Report.pdf")
            }
        })

        //Animation alert
        let timerInterval
    Swal.fire({
    title: 'Your Report is generating!',
    html: 'remaining in <b></b> milliseconds.',
    timer: 2100,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})


    }

    let today = new Date();

let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

    return (
        
        <div class="page-content container my-5" style={{fontFamily:"'Roboto', sans-serif"}}>
    <div class="page-header text-blue-d2 mt-4">
        <h1 class="page-title text-secondary-d1">
            Invoice
            <small class="page-info">
                <i class="fa fa-angle-double-right text-80 mx-2"></i>
                <b>ID:23525263477</b>
            </small>
        </h1>

        <div class="page-tools">
            <div class="action-buttons">
                <button class="mx-2 btn btn-success mx-1px text-95" href="#" data-title="Print" onClick={()=>print()}>
                    <i class="mx-2 fa fa-print text-light text-120 w-2"></i>
                    Print
                </button>
               

                <a class="mx-2 btn btn-danger mx-1px text-95" href="/abuyer/myorders/?cat=ordanalytic" data-title="Print">
                    <i class="mx-2 fa fa-left-arrow text-light text-120 w-2"></i>
                   Go Back
                </a>
            </div>
        </div>
    </div>
       
    <div class="container px-0">
    
        <div class="row mt-4">
        <div id="AmyOrder">
            <div class="col-12 col-lg-8 offset-lg-1">
                <div class="row">
                    <div class="col-12">
                        <div class="text-center text-150">
                            <img src={imgLogo} className="img-fluid" style={{maxWidth:"130px"}}/>
                            <h3 style={{fontFamily:"'Poppins', sans-serif"}} className="mt-1">Giftery.com</h3>
                            <h6 style={{fontFamily:"'Poppins', sans-serif"}} className="mt-1 text-muted">A Moments of Choosing Best Gift</h6>
                        </div>
                    </div>
                </div>
     

                <hr class="row brc-default-l1 mx-n1 mb-4" />
                <br/> 
                <div class="row">
                    <div class="col-sm-6">
                        <div>
                            <span class="text-600 mb-1 text-110 text-blue align-middle">Giftery Shop</span>
                        </div>
                        <div class="text-grey-m2">
                            <div class="my-1">
                                Kandy Rd, Kadawatha
                            </div>
                            <div class="my-1">
                                Western Province, 
                                <br/>Srilanka
                            </div>
                            <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">0112-151-611</b></div>
                        </div>
                    </div>
   

                    <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr class="d-sm-none" />
                        <div class="text-grey-m2">

                            <div class="my-1"><span class="text-600 mb-1 text-110 text-blue align-middle">{location.orders.amount}</span></div>
                            <div class="my-1"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span>23525263477</div>

                            <div class="my-1"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> {date}</div>

                            <div class="my-1"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> Paid</div>
                            <div class="my-1"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Duration:</span>{location.Ddate} to {location.Udate}</div>
                        </div>
                    </div>
                    
                </div>
                <br/><br/>
                <div className="text-center text-muted">
                    <u><h5 style={{fontFamily:"'Poppins', sans-serif"}} className="text-underlined">Monthly Report</h5></u>
                </div><br/>

                <table class="table my-3">
  <thead class="thead-light" style={{backgroundColor:"#d3ddf2"}}>
    <tr>
      <th scope="col">OrderID</th>
      <th scope="col">Date</th>
      <th scope="col">Item</th>
      <th scope="col">Supplier</th>
      <th scope="col">Status</th>
      <th scope="col">Amount (LKR) </th>
    </tr>
  </thead>
  <tbody style={{backgroundColor:"#f0f2f7"}}>
      {location.orders.map((o)=>(<tr><th scope="row">{o._id}</th>
      <td>{new Date(o.createdAt).toDateString()}</td>
      <td>{o.orderitems.map((i,h)=>(<>{h+1}. {i.productName} <br/></>))}</td>
      <td style={{width:"130px"}}>{o.orderitems.map((i,h)=>(<>{h+1}. {i.supplier} <br/></>))}</td>
      <td>{o.status}</td>
      <td>{o.amount}</td></tr>))}


   
    
  </tbody>
</table>


                

                    <div class="row mt-4">
                        <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                            Extra note such as company or payment information...
                        </div>
                        
                        <div class="col-12 col-sm-5 mt-4 text-grey text-90 order-first order-sm-last">
                            <div class="row my-2">
                            
                                <div class="col-5 text-right">
                                    SubTotal
                                </div>
                                <div class="col-7">
                                    <span class="text-120 text-secondary-d1">LKR {location.total}</span>
                                </div>
                            </div>

                            <div class="row my-2">
                                <div class="col-5 text-right">
                                    Cancelled (Return)
                                </div>
                                <div class="col-7">
                                    <span class="text-120 text-secondary-d1">LKR <span className="px-4">0</span></span>
                                </div>
                            </div>

                            <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div class="col-5 text-right">
                                    Total Amount
                                </div>
                                <div class="col-7">
                                    <span class="text-120 text-success-d3 opacity-2">LKR {location.total}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <span class="text-secondary-d1 text-105">Thank you for your business</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    )
}
