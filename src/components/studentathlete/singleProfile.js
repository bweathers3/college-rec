import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getProfile } from '../../actions/action';
import './style.css';

class SingleProfile extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    const { athleteId } = this.props.studentAthlete;
    this.props.getProfile( athleteId );
  }

  render(){
    if(!this.props.studentAthlete){
      return <div> Getting Athlete Information, please wait. </div>;
    }
    const { singleProfile } = this.props.studentAthlete;
    //let profile = singleProfile[0];
    console.log('singleProfile');
    console.log(singleProfile);
    //console.log('Profile');
    //console.log(profile);
    return(
      <div className="container">
      <Grid>
        <Row className="show-grid">
          <hr/>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h2>Address: </h2></Col>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h4> {  this.props.singleProfile.street } </h4></Col>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h4> {  this.props.singleProfile.city + ",  " + this.props.singleProfile.state + "   " + "   " + this.props.singleProfile.zip } </h4></Col>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h4> {  this.props.singleProfile.country } </h4></Col>
        </Row>
        <Row className="show-grid">
          <br/>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h4>Email: {  this.props.singleProfile.email } </h4></Col>
        </Row>
        <Row className="show-grid">
          <br/>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h4>Phone: {  this.props.singleProfile.phone } </h4></Col>
        </Row>
      </Grid>
      </div>

    );
  }
}

function mapStateToProps(state){
  return { singleProfile: state.studentAthlete.singleProfile}
}

export default connect(mapStateToProps, { getProfile: getProfile })(SingleProfile);
