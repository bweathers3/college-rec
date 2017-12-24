import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import { login, logout, isLoggedIn } from '../../utils/Authservice';

import './navbar.css';

//var classNames = require('classnames');

class Navbar extends Component {

  render() {

    return (
      <Col sm={ 12 } className="nav-bar">
        <h5 id="nav-title">
          <Link className="link" to="/">Get Recruited</Link>
        </h5>
        <div className="tabs">
          {
            (isLoggedIn()) ? ( <button className="btn btn-warning log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-primary log" onClick={() => login()}>Log In / Get Started</button> )
          }
        </div>
      </Col>
    )
  }
}

export default Navbar;
