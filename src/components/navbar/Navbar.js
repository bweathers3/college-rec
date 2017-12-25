import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import { isLoggedIn } from '../../actions/action';
import './navbar.css';

//var classNames = require('classnames');

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLoginClick() {
    this.props.login()
  }

  handleLogoutClick() {
    this.props.logout()
  }

  render() {
    return (
      <Col sm={ 12 } className="nav-bar">
        <h5 id="nav-title">
          <Link className="link" to="/">Get Recruited</Link>
        </h5>
        <div className="tabs">
          {
            (isLoggedIn()) ? ( <button className="btn btn-warning log" onClick={ this.handleLogoutClick }>Log out </button> ) : ( <button className="btn btn-primary log" onClick={ this.handleLoginClick }>Log In</button> )
          }
        </div>
      </Col>
    )
  }
}

export default Navbar;
