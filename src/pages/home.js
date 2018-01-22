import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { isLoggedIn } from '../actions/action';
import { salesPoint1, salesPoint2, salesPoint3 } from '../appData/salesPoints';

class Home extends Component {
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

      <div className="Home">
        <Row className="Home-header">
          <Col xs={12} md={12}><h1 className="Home-title">Welcome to GetRecruited.com </h1></Col>
        </Row>

        <Row className="Home-intro">
          <Col xs={12} md={12}>
            <p><strong>What to be a college athlete?</strong></p>
          </Col>
          <Col xs={12} md={12}>
            <p><strong>Get started today!</strong></p>
          </Col>
          <Col xs={12} md={12}>
            <p><strong>Make your dream come true.</strong></p>
          </Col>
          <Col xs={12} md={12}>
            {
            (isLoggedIn()) ? ( <button className='button-size' onClick={ this.handleLogoutClick }>Get Started Now</button> ) : ( <button className='button-size' onClick={ this.handleLoginClick }>Get Started Now</button> )
            }

          </Col>
        </Row>

        <Row className="container-sales-point">
          <Col xs={6} md={4}>
            <p><strong>{ salesPoint1.title }</strong></p>
            <p>{ salesPoint1.description }</p>
          </Col>
          <Col xs={6} md={4}>
            <p><strong>{ salesPoint2.title }</strong></p>
            <p>{ salesPoint2.description }</p>
          </Col>
          <Col xs={6} md={4}>
            <p><strong>{ salesPoint3.title }</strong></p>
            <p>{ salesPoint3.description }</p>
          </Col>
        </Row>

        <Row className="Footer">
          <Col xs={6} md={2}>GetRecruited.com </Col>
          <Col xsHidden md={8}></Col>
          <Col xs={6} md={2}>CopyRight 2018</Col>
        </Row>
      </div>

    );
  }
}

export default Home;
