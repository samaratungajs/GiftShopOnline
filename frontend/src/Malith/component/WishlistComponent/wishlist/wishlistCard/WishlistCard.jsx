import React, { Component, useEffect, useState } from "react";
import "./wishlistCard.css";
import axios from "axios";
import Swal from "sweetalert2";
export default function WishlistCard({ list }) {
  useEffect(() => {}, []);

  const toggleModal = async (id) => {
    (async () => {
      const { value: snote } = await Swal.fire({
        title: "Add Special Note",
        input: "text",
        inputLabel: "Note",
        inputPlaceholder: "Input your the short note",
      });

      if (snote) {
        await axios.put(`/awishlist/addnote/${id}`, {
          note: snote,
        });

        Swal.fire(`Add a note`);
        window.location.reload();
      }
    })();
  };

  const deleteItem = async (id) => {
    Swal.fire({
      title: "Do you want to remove this item from wishlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`/awishlist/deletewishlistitem/${id}`);
        } catch (error) {}

        Swal.fire("Removed!", "success");
        window.location.reload();
      }
    });
  };

  return (
    <div class="container mb-3">
      <div class="d-flex justify-content-center row">
        <div class="col-md-12">
          <div class="row p-2 bg-white border rounded">
            <div class="col-md-2 mt-1">
              <img
                class="img-fluid img-responsive rounded Aproduct-image"
                src={list.imageURL}
              />
            </div>
            <div class="col-md-7 mt-1">
              <h5>{list.productName}</h5>

              <div class="mt-1 mb-1 Aspec-1">
                <span>Free Delivery</span>
                <br />
                <span class="Adot"></span>
                <span>
                  <i class="fas fa-copyright p-2"></i>
                  {list.brand}
                </span>
                <span class="Adot"></span>
                <span>
                  <br />
                </span>
              </div>
              <div class="mt-1 mb-1 Aspec-1">
                <span></span>
                <span class="Adot"></span>
                <span>
                  <i class="fas fa-filter p-2"></i>
                  {list.category}
                </span>
                <span class="Adot"></span>
                <br />
                <span>
                  <i class="fas fa-store p-2"></i>
                  {list.supplier} store
                  <br />
                </span>
              </div>
              <p class="text-justify text-truncate para mb-0">
                {list.description}
                <br />
                <br />
              </p>
              <div className="mb-2">
                {list.note ? (
                  <div className="d-flex inline-row">
                    <i
                      class="far fa-clipboard mt-1 px-2"
                      style={{ color: "#009c58", fontSize: "18px" }}
                    ></i>
                    <h5 className="mt-1" style={{ color: "#009c58" }}>{list.note}</h5>
                    <button class="btn btn-dark btn-sm mx-4 mt-0 py-0" onClick={() => toggleModal(list._id)}>Update</button>
                  </div>
                ) : (
                  <a
                    onClick={() => toggleModal(list._id)}
                    className="AaddNoteLink"
                  >
                    <span className="px-2">Add a Special Note</span>
                    <span class="btn btn-primary btn-sm p-1">Add</span>
                  </a>
                )}
              </div>

              {/* input field when click */}
              {/* <div class="d-flex flex-row" style={{backgroundColor:"red"}}> <input type="text" Placeholder="Note" className="w-auto p-3 writeInput writeInputText"></input></div>    */}
            </div>

            <div class="align-items-center align-content-center col-md-3 border-left mt-1">
              <div class="d-flex flex-row align-items-center">
                <h4 class="mr-1 Ah5">LKR {list.wholesalePrice}</h4>
                <span class="Astrike-text">LKR {list.pricePItem}</span>
              </div>
              <div className="d-flex flex-row">
                <h6 class="text-success">Free Delivey</h6>
                <i
                  className="fas fa-trash AwishTrashIcon"
                  onClick={() => deleteItem(list._id)}
                ></i>
              </div>
              <div class="d-flex flex-column mt-4">
                <button class="btn btn-warning" type="button">
                  <i class="fas fa-shopping-cart mx-2"></i>Add Cart
                </button>
                <button class="btn btn-outline-dark mt-2" type="button">
                  <i class="fas fa-shopping-bag mx-2"></i>Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
