import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getProfile } from '../../actions/action';
import '../styles/componentsStyles.css';

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
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small">Address: </Col>
            <Col xs={ 4 } md={ 4 } className="Data-item-small"> {  this.props.singleProfile.street } </Col>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small"></Col>
            <Col xs={ 4 } md={ 4 } className="Data-item-small"> {  this.props.singleProfile.city + ",  " + this.props.singleProfile.state  + "       " + this.props.singleProfile.zip } </Col>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small"></Col>
            <Col xs={ 4 } md={ 4 } className="Data-item-small">{  this.props.singleProfile.country } </Col>
          </Row>
          <Row className="show-grid">
            <br/>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small">Email: </Col>
            <Col xs={ 2 } md={ 2 } className="Data-item-small">{  this.props.singleProfile.email } </Col>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small">Phone: </Col>
            <Col xs={ 2 } md={ 2 } className="Data-item-small">{ this.props.singleProfile.phone } </Col>
          </Row>
          <Row className="show-grid">
            <br/>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small">Siblings: </Col>
            <Col xs={ 4 } md={ 4 } className="Data-item-small">{ this.props.singleProfile.siblings } </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { singleProfile: state.studentAthlete.singleProfile }
}

export default connect(mapStateToProps, { getProfile: getProfile })(SingleProfile);
