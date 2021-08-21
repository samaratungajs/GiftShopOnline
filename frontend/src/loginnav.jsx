import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Accountant from "./Nivethika/SideNavbar/Accountant";

import Revenue from "./Nivethika/Screen/revenuecharts";
import ViewRevenue from "./Nivethika/Screen/viewRevenue";
import Nav from "./Nivethika/SideNavbar/nav1";



export default class loginnav extends React.Component {
   constructor(props) {
      super(props);
   }

   // componentDidMount() {
   //     const Email=`${this.props.match.params.email}`
   //      this.setState({ email: Email });
   //      console.log(this.state.email);

   //  }
   render() {
      return (
         <div className="App">
            <Router>

<Nav/>
               <div class="row">
               
                  <div class="col col-lg-2"><Accountant /></div>
                  <div class="col">

                    



                        <section>

                           <Switch>
                              <span>

                                 <Route exact path='/revenue' component={Revenue}></Route>
                                 <Route exact path='/view' component={ViewRevenue}></Route>
                              </span>




                           </Switch>

                        </section>

                   
                  </div>
               </div>

            </Router>


         </div>

      )
   }
}
