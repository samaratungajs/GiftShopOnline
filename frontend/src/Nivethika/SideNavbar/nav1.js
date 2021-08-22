import React, { Component } from 'react';

class Navbar1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light #fff"   position="fixed">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
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