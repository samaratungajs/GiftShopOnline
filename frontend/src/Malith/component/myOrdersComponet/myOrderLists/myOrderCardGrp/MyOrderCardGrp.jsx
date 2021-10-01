import React, { useEffect, useState } from "react";
import CompletedOrder from "../myOrderCard/CompletedOrders";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function MyOrderCardGrp({ order }) {
  const { search } = useLocation();
  const [state, setstate] = useState(false)

  useEffect(() => {
   if(search==="?cat=deleted"){
     setstate(true)
   }
  }, [search])



  const deleteOrder = async (id) => {
    Swal.fire({
      title: "Do you want to delete permently this item from Orders?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`/myorders/deleteorder/${id}`);
        } catch (error) {}

        Swal.fire("Deleted!", "success");
        window.location.reload();
      }
    });
  };



  const putBin = (id) => {
    Swal.fire({
      title: "Do you want to remove this item from Orders?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        const stat={
          status:"deleted"
        }
        try {
          axios.put(`/myorders/putbin/${id}`, stat);
        } catch (error) {}

        Swal.fire("Removed!", "success");
        window.location.reload();
      }
    });
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h4 className="mt-1">My Orders</h4>
      <div className="row p-3">
        <div className="card mb-2 ml-3">
          <div className="row">
            <div className="col-xl-3 col-sm-4 col-12">
              {search !== "?cat=ordanalytic" && (
                <div class="btn-group AcatDropDownBtn">
                  <button
                    type="button"
                    class="btn btn-dark dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by Date
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {order.map((o) => (
          <div className="card mb-5n p-0">
            <div
              className="container-fluid p-3"
              style={{ backgroundColor: "#f5f5f5", border: "1px" }}
            >
              <div className="d-flex justify-content-between mt-1">
                <h5 className="mt-2 text-blue">
                  <span className="text-muted mx-1">OrderID:</span>
                  {o._id}
                </h5>{" "}
                <h5 className="mt-2 text-danger">
                  <span className="text-muted mx-1">Total Amount:</span>LKR{" "}
                  {o.amount}.00
                </h5>
                <h5 className="mt-2 text-success">
                  {new Date(o.createdAt).toDateString()}
                </h5>


                {(search==="?cat=deleted")? <button onClick={()=>deleteOrder(o._id)} class="btn btn-danger mb-2" type="button">
                  <i class="fas fa-trash mx-2"></i>Permently Delete
                </button>
                :
                <button onClick={()=>putBin(o._id)} class="btn btn-danger mb-2" type="button">
                  <i class="fas fa-trash mx-2"></i>Delete
                </button>
                }
              </div>
              <CompletedOrder orders={o.orderitems} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
