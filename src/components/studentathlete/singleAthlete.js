import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getSingleAthlete } from '../../actions/action';
import '../styles/componentsStyles.css';

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
            <Col xs={ 6 } md={ 3 } className="Data-title">Name:</Col>
            <Col xs={ 6 } md={ 4 } className="Data-item"> { this.props.singleAthlete.firstName + " " + this.props.singleAthlete.middleName + " " + this.props.singleAthlete.lastName } </Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 3 } className="Data-title">Birthday: </Col>
            <Col xs={ 6 } md={ 4 } className="Data-item"> { this.props.singleAthlete.birthdate } </Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 3 } className="Data-title">Year Entering Univ.: </Col>
            <Col xs={ 6 } md={ 4 } className="Data-item"> { this.props.singleAthlete.intended_enrollment_year } </Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 3 } className="Data-title">Teams of Interest: </Col>
            <Col xs={ 6 } md={ 4 } className="Data-item"> { this.props.singleAthlete.gender } </Col>
          </Row>
          <Row className="show-grid">
            <br/>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 3 }><Link to='/addProfile/new'>
              <button className="btn btn-success log">Add New Athlete Profile</button>
            </Link></Col>
            <Col xs={ 6 } md={ 3 }><Link to='/singleProfile'>
              <button className="btn btn-primary log">Get Athlete Profile</button>
            </Link></Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 3 }><Link to='/addAcademic/new'>
              <button className="btn btn-success log">Add Academic Information</button>
            </Link></Col>
            <Col xs={ 6 } md={ 3 }><Link to='/singleAcademic'>
              <button className="btn btn-primary log">Get Academic Information</button>
            </Link></Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 3 }><Link to='/addAthletic/new'>
              <button className="btn btn-success log">Add Athletic Information</button>
            </Link></Col>
            <Col xs={ 6 } md={ 3 }><Link to='/singleAthletic'>
              <button className="btn btn-primary log">Get Athletic Information</button>
            </Link></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { singleAthlete: state.studentAthlete.singleAthlete}
}

export default connect(mapStateToProps, { getSingleAthlete: getSingleAthlete })(SingleAthlete);
