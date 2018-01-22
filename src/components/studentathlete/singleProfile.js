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
    this.props.getProfile( athleteId);
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
          <Col xs={ 6 } md={ 8 }><h2>Name: { this.props.singleProfile.city + " " + this.props.singleProfile.state + "   " + this.props.singleProfile.zip } </h2></Col>
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
  return { singleProfile: state.studentAthlete.singleProfile}
}

export default connect(mapStateToProps, { getProfile: getProfile })(SingleProfile);
