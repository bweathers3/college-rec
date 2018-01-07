import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { getSingleAthlete } from '../../actions/action';

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

      <h3>Frist Name: {this.props.singleAthlete.firstName} </h3>
      <h3>Middle Name: {this.props.singleAthlete.middleName} </h3>
      <h3>Last Name: {this.props.singleAthlete.lastName} </h3>
      <h3>Birthday: {this.props.singleAthlete.birthdate} </h3>

      </div>
    );
  }
}

function mapStateToProps(state){
  return { singleAthlete: state.studentAthlete.singleAthlete }
}

export default connect(mapStateToProps, { getSingleAthlete: getSingleAthlete })(SingleAthlete);
