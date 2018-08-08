import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <div className="nav">
     
          <ul>       
            <li><Link to="/">Library Information</Link></li>
            <li><Link to="/">My Favorite Library</Link></li>
          </ul>
       
      </div>
    );
  };
}

export default Nav;