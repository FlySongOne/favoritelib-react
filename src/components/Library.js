import React, { Component } from "react";

class Library extends Component {
  render() {
    return (
      <div className="">

         <h3>You searched the library below</h3> 
         <p>{this.props.library.name}</p>
         <p>{this.props.library.address} </p>
         <p>{this.props.library.city} </p>
         <p>{this.props.library.postalCode}</p>
         <div>
            <button
                onClick={ this.props.handleCreateSubmit}>
                Add to My Favorite Library 
            </button>
         </div> 
      </div>
             
    );
  }
}

export default Library;