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
    if (!values.city) {
        errors.city = 'Required'
      } else if (values.city.length < 2) {
        errors.city = 'Minimum be 2 characters or more'
    }
    if (!values.state) {
        errors.state = 'Required'
      } else if (values.state.length < 2) {
        errors.state = 'Minimum be 2 characters or more'
    }
    if (!values.country) {
        errors.country = 'Required'
      } else if (values.country.length < 2) {
        errors.country = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
        errors.email = 'Required'
      } else if (values.email.length < 2) {
        errors.email = 'Minimum be 2 characters or more'
    }
    if (!values.phone) {
        errors.phone = 'Required'
      } else if (values.phone.length < 6) {
        errors.phone = 'Minimum be 2 characters or more'
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
    this.props.createProfile(athleteId, props)
      .then(() => {
        this.context.router.push('/studentAthletes');
      });
  }

  render() {
    const { fields:{ street, city, state, zip, country, email, phone, siblings  }, handleSubmit, pristine, reset, submitting } = this.props;

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
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="city"
                component={ renderField }
                type="text"
                label="Your City:"
                placeholder="City"
              /></Col>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="state"
                component={ renderField }
                type="string"
                label="Your State or Providence"
                placeholder="State or Providence"
              /></Col>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="zip"
                component={ renderField }
                type="string"
                label="Your Zip or Mail Code"
                placeholder="Zip or Mail Code"
              /></Col>
            </Row>
            <Row>
            <Col xs={ 6 } md={ 4 }><Field
              name="country"
              component={ renderField }
              type="text"
              label="Your Country"
              placeholder="Country"
            /></Col>
            </Row>
            <Row className="show-grid">
              <br/>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="email"
                component={ renderField }
                type="string"
                label="Your Email Address"
                placeholder="Email Address"
              /></Col>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="phone"
                component={ renderField }
                type="string"
                label="Your Phone Number with Country Code"
                placeholder="Phone Number"
              /></Col>
            </Row>
            <Row className="show-grid">
              <br/>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="siblings"
                component={ renderField }
                type="text"
                label="Your Sibling's Names"
                placeholder="Sibling's Names"
              /></Col>
            </Row>
            <Row className="show-grid">
              <br/>
            </Row>
            <Row>
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
  fields: [ 'street', 'city', 'state', 'zip', 'country', 'email', 'phone', 'siblings'  ],
  validate
}, null, { createProfile })( NewProfile );
