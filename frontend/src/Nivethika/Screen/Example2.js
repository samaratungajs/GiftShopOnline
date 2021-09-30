import React from 'react';
import ReactToPrint from 'react-to-print';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ComponentToPrint1 } from './ComponentToPrint1';

class Example2 extends React.PureComponent {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      first: this.props.first,
      second: this.props.second,
      searchInput: this.props.searchInput

    }
  }
  render() {
    return (
      <div>

        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;

          }}
          content={() => this.componentRef}
        />

        <Route render={(props) => (<ComponentToPrint1 ref={el => (this.componentRef = el)} {...props} first={this.state.first} second={this.state.second} searchInput={this.state.searchInput} />)} exact></Route>

      </div>
    );
  }
}

export default Example2;