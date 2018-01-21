import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { getSingleAthlete, isLoggedIn } from '../../actions/action';

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
        <h3>First Name: {this.props.singleAthlete.firstName} </h3>
        <h3>Middle Name: {this.props.singleAthlete.middleName} </h3>
        <h3>Last Name: {this.props.singleAthlete.lastName} </h3>
        <h3>Birthday: {this.props.singleAthlete.birthdate} </h3>
        <h3>Year Entering Univ. : {this.props.singleAthlete.intended_enrollment_year} </h3>
        <h3>Teams of Interest: {this.props.singleAthlete.gender} </h3>

        <Link to='/addProfile/new'>
          <button className="btn btn-success log">Add New Athlete Profile</button>
        </Link>
        <Link to='/addAcademic/new'>
          <button className="btn btn-success log">Add Academic Information</button>
        </Link>
        <Link to='/addAthletic/new'>
          <button className="btn btn-success log">Add Athletic Information</button>
        </Link>
      </div>

    );
  }
}

function mapStateToProps(state){
  return { singleAthlete: state.studentAthlete.singleAthlete }
}

export default connect(mapStateToProps, { getSingleAthlete: getSingleAthlete })(SingleAthlete);
