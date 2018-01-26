import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getAcademic } from '../../actions/action';
import '../styles/componentsStyles.css';

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

    return(
      <div className="container">
        <Grid>
          <Row className="show-grid">
            <hr/>
          </Row>
          <Row>
            <Col xs={ 4 } md={ 12 } className="Home-intro">Academic Information:</Col>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small"> School: </Col>
            <Col xs={ 4 } md={ 4 } className="Data-item-small"> { this.props.singleAcademic.schoolName } </Col>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small"> Counselor: </Col>
            <Col xs={ 4 } md={ 4 } className="Data-item-small"> { this.props.singleAcademic.counselorName } </Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small"> Email: </Col>
            <Col xs={ 4 } md={ 4 } className="Data-item-small"> { this.props.singleAcademic.counselorEmail } </Col>
            <Col xs={ 1 } md={ 6 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small"> Phone: </Col>
            <Col xs={ 4 } md={ 4 } className="Data-item-small"> { this.props.singleAcademic.counselorPhone } </Col>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small"> GPA: </Col>
            <Col xs={ 4 } md={ 1 } className="Data-item-small"> { this.props.singleAcademic.gpa } </Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> Class Rank: </Col>
            <Col xs={ 4 } md={ 1 } className="Data-item-small"> { this.props.singleAcademic.classRank } </Col>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small"> SAT: </Col>
            <Col xs={ 4 } md={ 1 } className="Data-item-small"> { this.props.singleAcademic.sat } </Col>
            <Col xs={ 1 } md={ 1 } className="Data-title-small"> ACT: </Col>
            <Col xs={ 4 } md={ 1 } className="Data-item-small"> { this.props.singleAcademic.act } </Col>
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
