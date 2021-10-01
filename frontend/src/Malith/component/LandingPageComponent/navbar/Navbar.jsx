import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar Anavbar navbar-light bg-light navbar-expand">
        <div class="container-fluid py-0">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav Anavbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item Anav-item">
                <a class="nav-link Anav-link active Ahover" aria-current="page" href="/abuyer/search">
                  SHOPPING
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link Anav-link active Ahover" aria-current="page" href="/abuyer/search/?cat=cakes">
                 CAKES
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link Anav-link active Ahover" aria-current="page" href="/abuyer/search/?cat=flowers">
                  FLOWERS
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link Anav-link active Ahover" aria-current="page" href="/abuyer/search/?cat=perfume">
                  PERFUMES
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link Anav-link active Ahover" aria-current="page" href="/abuyer/search/?cat=watches">
                  WATCHES
                </a>
              </li>
            </ul>
            {/* <div className="navbar-nav">
              <a>
                <li className="nav-item border rounded-circle Anavicon mx-3 Ahover">
                  <i className="fas fa-search p-2"></i>
                </li>
              </a>
              <a>
                <li className="nav-item border rounded-circle Anavicon mx-3 Ahover">
                  <i className="fas fa-heart p-2"></i>
                  <span
                    class="position-absolute badge rounded-pill bg-danger mb-5"
                    style={{ fontSize: "0.8em" }}
                  >
                    8
                  </span>
                </li>
              </a>

              <a>
                <li className="nav-item border rounded-circle Anavicon mx-3 Ahover">
                  <i className="fas fa-shopping-cart p-2"></i>
                  <span
                    class="position-absolute badge rounded-pill bg-warning mb-5"
                    style={{ fontSize: "0.8em" }}
                  >
                    5
                  </span>
                </li>
              </a>

              <a>
                <li className="nav-item border rounded-circle Anavicon mx-4 Ahover">
                  <i className="fas fa-user p-2"></i>
                  
                </li>
              </a>


              

            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
