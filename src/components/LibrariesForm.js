import React, { Component } from "react";

class LibrariesForm extends Component {
 
  render() {
    return (
    <div className="landingPage">  
      <form
        className="search example" action="action_page.php"
        onSubmit={this.props.searchClick}
      >
      <input
        type="text"
        value={this.props.inputContentValue}
        name="content"
        placeholder="Search Library by Postal Code or Name"
        onChange={this.props.handleInputContentValue}
      />
        <button id="submit"><i className="fa fa-search" /></button>
      </form>
    </div>  
    );
  }
}

export default LibrariesForm;