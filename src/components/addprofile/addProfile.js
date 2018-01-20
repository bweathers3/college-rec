import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { Form, Col, Grid, Row, Button } from "react-bootstrap";
import { isLoggedIn, createProfile } from '../../actions/action';
import './addProfile.css';


const validate = values => {
    const errors = {}
    if (!values.street) {
      errors.firstName = 'Required'
    } else if (values.street.length < 2) {
      errors.street = 'Minimum be 2 characters or more'
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

class NewProfile extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    const { athleteId } = this.props.studentAthlete;
    
    console.log(athleteId, props);
    this.props.createProfile(athleteId, props)
      .then(() => {
        this.context.router.push('/studentAthletes');
      });
  }

  render() {
    const { athleteId } = this.props.studentAthlete;
    console.log('inside render, athleteId   ' + athleteId)
    const { fields:{ student_athlete_id, street, city, state, zip, country, email, phone, siblings  }, handleSubmit, pristine, reset, submitting } = this.props;


    return (
      <div className="Home-intro">
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Grid>
            <Row className="show-grid">
              <hr/>
              </Row>
              <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="street"
                component={ renderField }
              type="text"
              label="Your Street Address:"
              placeholder="Street"
            /></Col>
            <Col xs={ 12 } sm={ 8 } className="buttons">
                <Col xs={ 4 } className="buttons">
                  <Button bsStyle="primary" bsSize="sm" type="submit"
                    disabled={submitting}>Submit Athlete Profile Information</Button>
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
  form: 'NewProfileForm',
  fields: [ 'student_athlete_id', 'street', 'city', 'state', 'zip', 'country', 'email', 'phone', 'siblings'  ],
  validate
}, null, { createProfile })( NewProfile );
