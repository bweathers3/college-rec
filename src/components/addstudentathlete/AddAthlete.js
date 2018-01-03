import React, { Component } from 'react';
import { Link } from 'react-router';
import { Form, Col, Grid, Row, Button, Radio } from "react-bootstrap";
import { Field, reduxForm } from 'redux-form';
import { isLoggedIn, createStudentAthlete } from '../../actions/action';
import './addAthlete.css';


const NewStudentAthlete = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className="Home-intro">
      <Form horizontal onSubmit={handleSubmit}>
        <Grid>
          <Row className="show-grid">
            <hr/>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 2 }><label>First Name:</label></Col>
            <Col xs={ 6 } md={ 4 }><Field
              name="firstName"
              component="input"
              type="text"
              label="First Name"
              placeholder="First Name"
            /></Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 2 }><label>Middle Name:</label></Col>
            <Col xs={ 6 } md={ 4 }><Field
              name="middleName"
              component="input"
              type="text"
              label="Middle Name"
              placeholder="Middle Name"
            /></Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 2 }><label>Last Name:</label></Col>
            <Col xs={ 6 } md={ 4 }><Field
              name="lastName"
              component="input"
              type="text"
              label="Last Name"
              placeholder="Last Name"
            /></Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 2 }><label>Birthday:</label></Col>
            <Col xs={ 6 } md={ 4 }><Field
              name="birthdate"
              component="input"
              type="date"
              label="Birthday"
              placeholder="MM/DD/YYYY"
            /></Col>
          </Row>

          <Row className="show-grid">
            <br/>
          </Row>

          <Row>
            <Col xs={ 6 } md={ 5 }><label> Select The Type of Team You Want to be Recruited By:</label></Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 3 }></Col>
            <Col xs={ 6 } md={ 2 }><Field name="gender" component="input" type="radio" value="Men's Teams"/>
              {' '}
              Mens Teams
            </Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 3 }></Col>
            <Col xs={ 6 } md={ 4 }><Field name="gender" component="input" type="radio"  value="Women's Teams"/>
              {' '}
              Womens Teams
            </Col>
          </Row>
          <Row className="show-grid">
            <br/>
          </Row>
          <Row className="show-grid">
            <Col md={ 2 }>
              {' '}
            </Col>
            <Col xs={ 12 } sm={ 8 } className="buttons">
            <Col xs={ 4 } className="buttons">
              <Button bsStyle="primary" bsSize="sm" type="submit"
                disabled={submitting}>Submit New Athlete Information</Button>
                </Col>
            <Col xs={ 1 } className="buttons">
              <Button type="button" bsSize="sm" disabled={pristine || submitting} onClick={reset}>Clear
                Values</Button>
            </Col>
            </Col>
          </Row>
        </Grid>
      </Form>
    </div>
  );
};



export default reduxForm({
  form: 'NewStudentAthleteForm',
  fields: [ 'firstName', 'middleName', 'lastName', 'birthdate' ]
}, null, { createStudentAthlete })( NewStudentAthlete );
