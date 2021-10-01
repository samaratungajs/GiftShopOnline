import React from 'react'
import './orderAnalyticTable.css'
export default function RecentTable({tab}) {
    return (
        <div>
            <h2 style={{color:"blue"}}>Recent Orders</h2>
            <table className="table bg-light" >
  <thead className="thead-light" style={{fontFamily:"'Poppins', sans-serif", fontSize:"19px", backgroundColor:"#cfcfcf"}}>
    <tr className="text-center">
      <th scope="col">OrderID</th>
      <th scope="col">Item</th>
      <th scope="col">Supplier</th>
      <th scope="col">Status</th>
      <th scope="col">Amount(RS)</th>
    </tr>
  </thead>
  <tbody style={{fontFamily:"'Poppins', sans-serif", color:"#3d3d3d"}}>
    {tab.map((od)=>(<tr>
      <th scope="row" style={{color:"#027d75"}}>{od._id}</th>
      
      <td>{od.orderitems.map((o)=>(<><i class="fas fa-circle p-2" style={{fontSize:"13px"}}></i>{o.productName}<br/>
      </>))}</td>

      <td style={{width:"200px"}} >{od.orderitems.map((o)=>(<><i class="fas fa-circle p-2" style={{fontSize:"13px"}}></i>{o.supplier}<br/>
      </>))}</td>

      <td><span class="Ac-pill Ac-pill--success">{od.status}</span></td>
      <td className="text-center" style={{color:"blue"}}>{od.amount}</td>
    </tr>))}
  </tbody>
</table>
<br/><br/>
        </div>
    )
}
