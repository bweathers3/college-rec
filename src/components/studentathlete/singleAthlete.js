import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getSingleAthlete } from '../../actions/action';
import './style.css';

class SingleAthlete extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.getSingleAthlete(this.props.params.id);
  }

  render(){
    if(!this.props.singleAthlete){
      return <div> Getting Athlete Information, please wait. </div>;
    }

    return(
      <div className="container">
      <Grid>
        <Row className="show-grid">
          <hr/>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h2>Name: { this.props.singleAthlete.firstName + " " + this.props.singleAthlete.middleName + " " + this.props.singleAthlete.lastName } </h2></Col>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h3>Birthday: { this.props.singleAthlete.birthdate } </h3></Col>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h3>Year Entering Univ. : { this.props.singleAthlete.intended_enrollment_year } </h3></Col>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h3>Teams of Interest: { this.props.singleAthlete.gender } </h3></Col>
        </Row>
        <Row className="show-grid">
          <br/>
        </Row>
      </Grid>

        <Link to='/addProfile/new'>
          <button className="btn btn-success log">Add New Athlete Profile</button>
        </Link>
        <Link to='/addAcademic/new'>
          <button className="btn btn-success log">Add Academic Information</button>
        </Link>
        <Link to='/addAthletic/new'>
          <button className="btn btn-success log">Add Athletic Information</button>
        </Link>
        <Link to='/singleProfile'>
          <button className="btn btn-primary log">Get Athlete Profile</button>
        </Link>
      </div>

    );
  }
}

function mapStateToProps(state){
  return { singleAthlete: state.studentAthlete.singleAthlete}
}

export default connect(mapStateToProps, { getSingleAthlete: getSingleAthlete })(SingleAthlete);
