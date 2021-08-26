import React, { Component } from 'react';
import '../SideNavbar/Navbar.css';

class Navbar1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-#060b26 text-white" position= "sticky" >
          <div class="center">
            <a className="navbar-brand text-white" href="#">ADMI PANEL</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            </div>
         
        </nav>
      </div>
    )
  }
}

export default Navbar1;