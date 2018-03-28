import React, { Component } from "react";

class FavoriteLibrary extends Component {
  render() {
    return (
      <div className="favorite">
        
          <ul>    
              <li>Library Name: { this.props.name} </li>
              <li>Address: { this.props.address}</li>
              <li>City: { this.props.city }</li>
              <li>Postal Code: { this.props.postalCode}</li>
          </ul> 
          
          <button
              onClick={() => this.props.deleteLibrary(this.props.id, this.props.index)}>
              Delete
          </button>
        
      </div>    
    );
  }
}

export default FavoriteLibrary;