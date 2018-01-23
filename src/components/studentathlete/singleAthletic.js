import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getAthletic } from '../../actions/action';
import './style.css';

class SingleAthletic extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    const { athleteId } = this.props.studentAthlete;
    this.props.getAthletic( athleteId );
  }

  render(){
    if(!this.props.studentAthlete){
      return <div> Getting Athlete Information, please wait. </div>;
    }
    const { singleAthletic } = this.props.studentAthlete;

    console.log('singleAthletic');
    console.log(singleAthletic);

    return(
      <div className="container">
      <Grid>
        <Row className="show-grid">
          <hr/>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h2>Athletic Information: </h2></Col>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h4>50 Free SCY: {  this.props.singleAthletic.stat1 } </h4></Col>
          <Col xs={ 6 } md={ 8 }><h4>50 Free SCM: {  this.props.singleAthletic.stat2 } </h4></Col>
          <Col xs={ 6 } md={ 8 }><h4>50 Free LCM: {  this.props.singleAthletic.stat3 } </h4></Col>
        </Row>

        <Row className="show-grid">
          <br/>
        </Row>

      </Grid>
      </div>

    );
  }
}

function mapStateToProps(state){
  return { singleAthletic: state.studentAthlete.singleAthletic }
}

export default connect(mapStateToProps, { getAthletic: getAthletic })(SingleAthletic);
