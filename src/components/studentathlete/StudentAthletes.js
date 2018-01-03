import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { getStudentAthletes } from '../../actions/action';

//import './?.css';

class StudentAthletes extends React.Component {
  render() {
    return (
      <div className="container">
        athletes page
      </div>

    )
  }
}

/*
function mapStateToProps(state){
  return { studentAthletes: state.studentAthletes.all }
}
*/
export default connect(null, { getStudentAthletes: getStudentAthletes })(StudentAthletes);
