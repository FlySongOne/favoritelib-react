import React, { Component } from 'react';
import Logo from '../../images/queenslibrary.gif';
import Nav from './Nav';


class Header extends Component {

  render() {
   // console.log('inside header', this.props.currentUser)
    return (
      <header>
        <a href='http://localhost:3000/'>
        <img src={Logo} className="logo" alt="logo" />
        </a>
        <Nav />

      </header>
    );
  };
}

export default Header;