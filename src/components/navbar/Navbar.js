import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

import './navbar.css';

var classNames = require('classnames');

class Navbar extends Component {

  render() {

    return (
      <Col sm={ 12 } className="nav-bar">
        <h5 id="nav-title">
          <Link className="link" to="/">Get Recruited</Link>
        </h5>
      </Col>
    )
  }
}

export default Navbar;
