import React, { Component } from "react";

class FavoriteLibrary extends Component {
  render() {
    return (
      <div className="favorite">
        
          <ul>    
              <li>Name: { this.props.name} </li>
              <li>Address: { this.props.address}</li>
              <li>City: { this.props.city }</li>
              <li>Postal Code: { this.props.postalCode}</li>
          </ul> 
         
          <button
              onClick={() => this.props.deleteLibrary(this.props.id, this.props.index)}>
              Delete
          </button>
          <form
             className=""
             onSubmit={this.props.handleUpdateSubmit}
          >
              <input 
                  name="name"
                  value={this.props.name}
                  onChange={(event) => this.props.handleLibraryChange(event, this.props.index)}  
                  
              />
              <input 
                  name="address"
                  value={this.props.address}
                  onChange={(event) => this.props.handleLibraryChange(event, this.props.index)}   
                 
              />
              <input 
                  name="city"
                  value={this.props.city}
                  onChange={(event) => this.props.handleLibraryChange(event, this.props.index)}
                       
              />
              <input 
                  name="postalCode"
                  value={this.props.postalCode}
                  onChange={(event) => this.props.handleLibraryChange(event, this.props.index)}   
               />
              <button id="submit" >    
                  Update
              </button> 
           </form> 

      </div>    
    );
  }
}

export default FavoriteLibrary;