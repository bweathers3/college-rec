import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getAcademic } from '../../actions/action';
import './style.css';

class SingleAcademic extends Component{
  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    const { athleteId } = this.props.studentAthlete;
    this.props.getAcademic( athleteId );
  }

  render(){
    if(!this.props.studentAthlete){
      return <div> Getting Athlete Information, please wait. </div>;
    }
    const { singleAcademic } = this.props.studentAthlete;

    console.log('singleAcademic');
    console.log(singleAcademic);

    return(
      <div className="container">
      <Grid>
        <Row className="show-grid">
          <hr/>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h2>Academic Information: </h2></Col>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h4>School: {  this.props.singleAcademic.schoolName } </h4></Col>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h4>Counselor firstName: {  this.props.singleAcademic.counselorName } </h4></Col>
        </Row>
        <Row>
          <Col xs={ 6 } md={ 8 }><h4>Counselor Email: {  this.props.singleAcademic.counselorEmail } </h4></Col>
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
  return { singleAcademic: state.studentAthlete.singleAcademic }
}

export default connect(mapStateToProps, { getAcademic: getAcademic })(SingleAcademic);
