import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { Form, Col, Grid, Row, Button } from "react-bootstrap";
import { isLoggedIn, createAcademic } from '../../actions/action';
import './addacademic.css';


const validate = values => {
    const errors = {}
    if (!values.schoolName) {
      errors.schoolName = 'Required'
    } else if (values.schoolName.length < 2) {
      errors.schoolName = 'Minimum be 2 characters or more'
    }
    if (!values.counselorName) {
        errors.counselorName = 'Required'
      } else if (values.counselorName.length < 2) {
        errors.counselorName = 'Minimum be 2 characters or more'
    }
    if (!values.counselorEmail) {
        errors.counselorEmail = 'Required'
      } else if (values.counselorEmail.length < 2) {
        errors.counselorEmail = 'Minimum be 2 characters or more'
    }
    if (!values.counselorPhone) {
        errors.counselorPhone = 'Required'
      } else if (values.counselorPhone.length < 2) {
        errors.counselorPhone = 'Minimum be 2 characters or more'
    }

    return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <Row>
    <Col xs={ 12 } md={ 6 }><label className="control-label">{label}</label></Col>
    <Col xs={ 12 } md={ 6 }>
      <input { ...input } placeholder={ label } type={ type } className="form-control" />
      { touched && ((error && <span className="text-danger">{ error }</span>) || (warning && <span>{ warning }</span>)) }
    </Col>
  </Row>
)

class NewAcademic extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    const { athleteId } = this.props.studentAthlete;
    this.props.createAcademic(athleteId, props)
      .then(() => {
        this.context.router.push('/studentAthletes');
      });
  }

  render() {
    const { fields:{ schoolName, counselorName, counselorEmail, counselorPhone, gpa, classRank, sat, act  }, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className="Home-intro">
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Grid>
            <Row className="show-grid">
              <hr/>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="schoolName"
                component={ renderField }
                type="text"
                label="Your High School firstName:"
                placeholder="High School"
              /></Col>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="counselorName"
                component={ renderField }
                type="text"
                label="Your Counselor's Name:"
                placeholder="Counselor's Name"
              /></Col>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="counselorEmail"
                component={ renderField }
                type="text"
                label="Your Counselor's Email:"
                placeholder="Counselor's Email"
              /></Col>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="counselorPhone"
                component={ renderField }
                type="string"
                label="Your Counselor's Phone:"
                placeholder="Counselor's Phone"
              /></Col>
            </Row>
            <Row className="show-grid">
              <br/>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="gpa"
                component={ renderField }
                type="string"
                label="Your GPA:"
                placeholder="GPA"
              /></Col>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="classRank"
                component={ renderField }
                type="string"
                label="Your ClassRank:"
                placeholder="ClassRank"
              /></Col>
            </Row>
            <Row className="show-grid">
              <br/>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="sat"
                component={ renderField }
                type="string"
                label="Your Best SAT Score:"
                placeholder="SATs"
              /></Col>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="act"
                component={ renderField }
                type="string"
                label="Your Best ACT Score:"
                placeholder="ACTs"
              /></Col>
            </Row>
            <Row className="show-grid">
              <br/>
            </Row>
            <Row>
              <Col xs={ 12 } sm={ 8 } className="buttons">
                <Col xs={ 4 } className="buttons">
                  <Button bsStyle="primary" bsSize="sm" type="submit"
                  disabled={submitting}>Submit Academic Information</Button>
                </Col>
             </Col>
            </Row>
         </Grid>
       </Form>
     </div>
  );
}
};

export default reduxForm({
  form: 'NewAcademicForm',
  fields: [ 'schoolName', 'counselorName', 'counselorEmail', 'counselorPhone', 'gpa', 'classRank', 'sat', 'act'  ],
  validate
}, null, { createAcademic })( NewAcademic );
