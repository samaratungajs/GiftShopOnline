import React, { Component } from 'react'

export default class Topcard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
    }
  }
  
    render() {
        return (
            <div className="row px-2">
      <div className="card">
        <div className="card-body">
          {this.props.results&&this.props.status&&<h5 className="mt-2 text-warning">Showing {this.props.results} resualts found...</h5>}
          <div className="d-flex justify-content-between align-items-center">
          <div className="d-inline-flex">
                    <p className="h-5 pt-2 mx-2">Price Range </p>
                    <input type="number" placeholder="min" min="0" max="120000" className="ApriceRangeBox"/><b className="mt-2">-</b>
                    <input type="number" placeholder="max" min="0" max="120000" className="ApriceRangeBox" style={{marginLeft:"8px"}}/>
                </div>
            

                <div className="d-inline-flex">
                    <div><p className="h-5 mx-2 mt-3">Sort By</p></div>
                    <div class="btn-group p-2 dropleft">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Date
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div></div>
</div>

                </div>
  </div>
  </div>
        )
    }
}
