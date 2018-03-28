import React, { Component } from "react";

class Library extends Component {
  render() {
    return (
      <div className="">

         <h3>You searched the library below</h3> 
         <p>Library Name: {this.props.library.name}</p>
         <p>Address: {this.props.library.address} </p>
         <p>City: {this.props.library.city} </p>
         <p>Postal Code: {this.props.library.postalCode}</p>
         
      </div>    
    );
  }
}

export default Library;