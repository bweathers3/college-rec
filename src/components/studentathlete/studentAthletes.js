import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import { getStudentAthletes } from '../../actions/action';

class StudentAthletes extends React.Component {
  componentWillMount(){
    this.props.getStudentAthletes();
  }

  renderStudentAthletes(){
    return this.props.studentAthletesArray.map(( studentathlete ) => {
      return (
        <li key={ studentathlete.id }>
          <Link to={ "singleAthlete/" + studentathlete.id }>
            <h4> { studentathlete.firstName + " " + studentathlete.middleName + " " + studentathlete.lastName } </h4>
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <Grid>
        <Row className="show-grid">
          <hr/>
        </Row>
          <Row>
            <Col md={ 4 }>
              Your Athlete(s)
            </Col>
          </Row>
          <Row>
            <Col md={ 4 }>
              <ol className="list-group">
                { this.renderStudentAthletes() }
              </ol>
            </Col>
          </Row>
          <Row>
            <Link to='/addAthlete/new'><button className="btn btn-success log">New Athlete</button></Link>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { studentAthletesArray: state.studentAthlete.studentAthletesArray }
}

export default connect(mapStateToProps, { getStudentAthletes: getStudentAthletes })(StudentAthletes);
