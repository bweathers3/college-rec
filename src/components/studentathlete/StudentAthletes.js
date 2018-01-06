import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import { getStudentAthletes } from '../../actions/action';

//import './?.css';

class StudentAthletes extends React.Component {
  componentWillMount(){
    this.props.getStudentAthletes();
    console.log('test load getStudentAthlete')
    console.log(this.props.getStudentAthletes())

  }

  renderStudentAthletes(){
    return this.props.studentAthletesArray.map((studentathlete) => {
      return (
        <li key={studentathlete.id}>
          <Link to={"studentAthlete/" + studentathlete.id }>
            <h4> {studentathlete.firstName} </h4>
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <Row>

        athletes Home Page
        <ul className="list-group">
          {this.renderStudentAthletes()}
        </ul>
      </Row>

    )
  }
}

function mapStateToProps(state){
  return { studentAthletesArray: state.studentAthlete.studentAthletesArray }
}

export default connect(mapStateToProps, { getStudentAthletes: getStudentAthletes })(StudentAthletes);
