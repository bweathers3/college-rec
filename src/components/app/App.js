//import React, { Component } from 'react';
//import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../actions/action';
import Main from '../../pages/Main';
//import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

function mapStateToProps(state) {
  return {
    salesPointsHome: state.salesPointsHome,
    tabControl: state.tabControl
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);


      /*
      <div className="Home">
        <Row className="Home-header">
          <Col xs={6} md={2}>Get Recruited</Col>
          <Col xsHidden md={8}></Col>
          <Col xs={6} md={2}>Log In</Col>
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
           <button className='button-size' >Get Started Now</button>
          </Col>
        </Row>

        <Row className="container-sales-point">
          <Col xs={6} md={4}>
            <p><strong>Point 1: </strong></p>
            <p>Test point 1 with a reason to be take control of your own recruiting</p>
          </Col>
          <Col xs={6} md={4}>
            <p><strong>Point 2: </strong></p>
            <p>Test point 2 with a reason to be take control of your own recruiting</p>
          </Col>
          <Col xs={6} md={4}>
            <p><strong>Point 3: </strong></p>
            <p>Test point 3 with a reason to be take control of your own recruiting and how GetRecruited helps you understand the recruiting process as you update coaches</p>
          </Col>
        </Row>

        <Row className="Footer">
          <Col xs={6} md={2}>GetRecruited.com </Col>
          <Col xsHidden md={8}></Col>
          <Col xs={6} md={2}>CopyRight 2018</Col>
        </Row>
      </div>
      */


export default App;
