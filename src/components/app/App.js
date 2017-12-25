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
    authReducer: state.authReducer,
    salesPointsHome: state.salesPointsHome,
    tabControl: state.tabControl
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
