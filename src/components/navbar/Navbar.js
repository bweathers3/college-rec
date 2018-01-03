import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
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
      <Row>
      <Col md={ 12 } md={ 9 } className="nav-bar">
        <h5 id="nav-title">
          <Link className="link" to="/">Get Recruited</Link>
        </h5>
      </Col>
         <Col xs={ 6 } md={ 3 } >
          {
            (isLoggedIn()) ? ( <Link to='/studentAthletes/new'><button className="btn btn-success log">Athletes</button></Link> ) : ( <button className="btn btn-primary log" onClick={ this.handleLoginClick }>Athletes</button> )
          }
          {
            (isLoggedIn()) ? ( <button className="btn btn-warning log" onClick={ this.handleLogoutClick }>Log out</button> ) : ( <button className="btn btn-primary log" onClick={ this.handleLoginClick }>Log In</button> )
          }
          </Col>
          </Row>
    )
  }
}

export default Navbar;
