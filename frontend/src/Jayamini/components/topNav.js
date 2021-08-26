import React, { Component } from 'react';

class Navbar1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pStyle = {
      height:'70px'
   };
   const iStyle = {
    position: 'relative',
    right: '+25px',
    top:'-16px',
    display: 'inline-block'
    
 };
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-#060b26 " position= "sticky" style={pStyle}>
          <div className="container-fluid ">
            <a className="navbar-brand text-white" href="#">Product Management </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="mt-3 ml-5"><i class="far fa-bell fa-2x text-white"></i><span class="counter counter-lg vis border-round text-white " style={iStyle}><i class="fas fa-circle text-danger"></i></span>
            </div>  
            </div>
         
        </nav>
      </div>
    )
  }
}

export default Navbar1;