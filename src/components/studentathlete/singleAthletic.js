import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { getAthletic } from '../../actions/action';
import '../styles/componentsStyles.css';

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

    return(
      <div className="container">
        <Grid>
          <Row className="show-grid">
            <hr/>
          </Row>
          <Row>
            <Col xs={ 4 } md={ 12 } className="Home-intro">Athletic Information:</Col>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 50 Free SCY: </Col>
            <Col xs={ 4 } md={ 2 } className="Data-item-small"> { this.props.singleAthletic.stat1 } </Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 50 Free SCM: </Col>
            <Col xs={ 4 } md={ 2 } className="Data-item-small"> { this.props.singleAthletic.stat2 } </Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 50 Free LCM: </Col>
            <Col xs={ 4 } md={ 1 } className="Data-item-small"> { this.props.singleAthletic.stat3 } </Col>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 100 Free SCY: </Col>
            <Col xs={ 4 } md={ 2 } className="Data-item-small"> { this.props.singleAthletic.stat4 } </Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 100 Free SCM: </Col>
            <Col xs={ 4 } md={ 2 } className="Data-item-small"> { this.props.singleAthletic.stat5 } </Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 100 Free LCM: </Col>
            <Col xs={ 4 } md={ 1 } className="Data-item-small"> { this.props.singleAthletic.stat6 } </Col>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 200 Free SCY: </Col>
            <Col xs={ 4 } md={ 2 } className="Data-item-small"> { this.props.singleAthletic.stat7 } </Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 200 Free SCM: </Col>
            <Col xs={ 4 } md={ 2 } className="Data-item-small"> { this.props.singleAthletic.stat8 } </Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 200 Free LCM: </Col>
            <Col xs={ 4 } md={ 1 } className="Data-item-small"> { this.props.singleAthletic.stat9 } </Col>
          </Row>
          <Row>
            <Col xs={ 1 } md={ 1 } ></Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 400 Free SCY: </Col>
            <Col xs={ 4 } md={ 2 } className="Data-item-small"> { this.props.singleAthletic.stat10 } </Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 400 Free SCM: </Col>
            <Col xs={ 4 } md={ 2 } className="Data-item-small"> { this.props.singleAthletic.stat11 } </Col>
            <Col xs={ 1 } md={ 2 } className="Data-title-small"> 400 Free LCM: </Col>
            <Col xs={ 4 } md={ 1 } className="Data-item-small"> { this.props.singleAthletic.stat12 } </Col>
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
