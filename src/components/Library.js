import React, { Component } from "react";

class Library extends Component {
  
  render() {
      if(this.props.showBlock){ 

          return (
            <div className="library">
              
              <div className="cell">
              <h3>You searched the library below</h3> 
              <p>{this.props.library.name}</p>
              <p>{this.props.library.address} </p>
              <p>{this.props.library.city} </p>
              <p>{this.props.library.postalCode}</p>
              <div className="add">
                  <button
                      onClick={ this.props.handleCreateSubmit}>
                      Add to My Favorite Library 
                  </button>
              </div> 
              </div>
              <div className="cell">
                <h3>Library Hours</h3>
                    <p>Monday: {this.props.library.mn}</p>
                    <p>Tuesday: {this.props.library.tu}</p>
                    <p>Wednesday: {this.props.library.we}</p>
                    <p>Thursday: {this.props.library.th}</p>
                    <p>Friday: {this.props.library.fr}</p>
                    <p>Saturday: {this.props.library.sa}</p>
                    <p>Sunday: {this.props.library.su}</p>
                      
              </div>
            </div>
                  
          );
      } else {
        return(<div></div>);
      }
  }
}

export default Library;