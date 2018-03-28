import React, { Component } from "react";

class LibrariesForm extends Component {
  render() {
    return (
      
      <form
        className="search"
        onSubmit={this.props.searchClick}
      >
      <input
        type="text"
        value={this.props.inputContentValue}
        name="content"
        placeholder="Search by postal code or name"
        onChange={this.props.handleInputContentValue}
      /><br/>
        <button id="submit">Search Library</button>
      </form>
    );
  }
}

export default LibrariesForm;