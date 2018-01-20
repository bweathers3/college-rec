import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { Form, Col, Grid, Row, Button, Radio } from "react-bootstrap";
import { isLoggedIn, createStudentAthlete } from '../../actions/action';
import './addAthlete.css';

const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
      } else if (values.lastName.length < 2) {
        errors.lastName = 'Minimum be 2 characters or more'
    }
    if (!values.birthdate) {
        errors.birthdate = 'Required'
    }
    if (!values.gender) {
        errors.gender = 'Required'
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

class NewStudentAthlete extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    console.log('add athlete' + props);
    this.props.createStudentAthlete(props)
      .then(() => {
        this.context.router.push('/studentAthletes');
      });
  }

  render() {

  const { fields:{ firstName, middleName, lastName, birthdate, gender, intended_enrollment_year }, handleSubmit, pristine, reset, submitting } = this.props;
  return (
    <div className="Home-intro">
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Grid>
          <Row className="show-grid">
            <hr/>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 4 }><Field
              name="firstName"
              component={ renderField }
              type="text"
              label="First Name"
              placeholder="First Name"
            /></Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 4 }><Field
              name="middleName"
              component={ renderField }
              type="text"
              label="Middle Name"
              placeholder="Middle Name"
            /></Col>
          </Row>
          <Row>

            <Col xs={ 6 } md={ 4 }><Field
              name="lastName"
              component={ renderField }
              type="text"
              label="Last Name"
              placeholder="Last Name"
            /></Col>
          </Row>
          <Row>
            <Col xs={ 6 } md={ 4 }><Field
              name="birthdate"
              component={ renderField }
              type="date"
              label="Birthday"
              placeholder="MM/DD/YYYY"
              inputValueFormat="DD/MM/YYYY"
              dateFormat="MM-DD-YYYY"

            /></Col>
          </Row>
          <Row className="show-grid">
            <br/>
          </Row>

          <Row>
            <Col xs={ 6 } md={ 2 }>
              <label>Year Entering University:</label>
            </Col>
            <Col xs={ 6 } md={ 2 }>
              <Field name="intended_enrollment_year" component="select">
                <option></option>
                <option value="Fall 2018 or Spring 2019">Fall 2018 or Spring 2019</option>
                <option value="Fall 2019 or Spring 2020">Fall 2019 or Spring 2020</option>
                <option value="Fall 2020 or Spring 2021">Fall 2020 or Spring 2021</option>
                <option value="Fall 2021 or Spring 2022">Fall 2021 or Spring 2022</option>
                <option value="Fall 2022 or Spring 2023">Fall 2022 or Spring 2023</option>
                <option value="Fall 2023 or Spring 2024">Fall 2023 or Spring 2024</option>
              </Field>
            </Col>
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
}
};


export default reduxForm({
  form: 'NewStudentAthleteForm',
  fields: [ 'firstName', 'middleName', 'lastName', 'birthdate', 'gender', 'intended_enrollment_year' ],
  validate
}, null, { createStudentAthlete })( NewStudentAthlete );
