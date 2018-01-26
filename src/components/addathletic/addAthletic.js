import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, Col, Grid, Row, Button } from "react-bootstrap";
import { createAthletic } from '../../actions/action';
import '../styles/componentsStyles.css';

const validate = values => {
    const errors = {}

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

class NewAthletic extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    const { athleteId } = this.props.studentAthlete;
    this.props.createAthletic(athleteId, props)
      .then(() => {
        this.context.router.push('/studentAthletes');
      });
  }

  render() {
    const { fields:{ stat1, stat2, stat3, stat4, stat5, stat6, stat7, stat8, stat9, stat10, stat11, stat12 }, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className="Home-intro">
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Grid>
            <Row className="show-grid">
              <hr/>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat1"
                component={ renderField }
                type="string"
                label="50 Free SCY:"
                placeholder="50 Free SCY"
              /></Col>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat2"
                component={ renderField }
                type="string"
                label="50 Free SCM:"
                placeholder="50 Free SCM"
              /></Col>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat3"
                component={ renderField }
                type="string"
                label="50 Free LCM:"
                placeholder="50 Free LCM"
              /></Col>
            </Row>
            <Row className="show-grid">
              <br/>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat4"
                component={ renderField }
                type="string"
                label="100 Free SCY:"
                placeholder="100 Free SCY"
              /></Col>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat5"
                component={ renderField }
                type="string"
                label="100 Free SCM:"
                placeholder="100 Free SCM"
              /></Col>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat6"
                component={ renderField }
                type="string"
                label="100 Free LCM:"
                placeholder="100 Free LCM"
              /></Col>
            </Row>
            <Row className="show-grid">
              <br/>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat7"
                component={ renderField }
                type="string"
                label="200 Free SCY:"
                placeholder="200 Free SCY"
              /></Col>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat8"
                component={ renderField }
                type="string"
                label="200 Free SCM:"
                placeholder="200 Free SCM"
              /></Col>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat9"
                component={ renderField }
                type="string"
                label="200 Free LCM:"
                placeholder="200 Free LCM"
              /></Col>
            </Row>
            <Row className="show-grid">
              <br/>
            </Row>
            <Row>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat10"
                component={ renderField }
                type="string"
                label="400 Free SCY:"
                placeholder="400 Free SCY"
              /></Col>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat11"
                component={ renderField }
                type="string"
                label="400 Free SCM:"
                placeholder="400 Free SCM"
              /></Col>
              <Col xs={ 6 } md={ 4 }><Field
                name="stat12"
                component={ renderField }
                type="string"
                label="400 Free LCM:"
                placeholder="400 Free LCM"
              /></Col>
            </Row>
            <Row className="show-grid">
              <br/>
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
  form: 'NewAthleticForm',
  fields: [ 'stat1', 'stat2', 'stat3', 'stat4', 'stat5', 'stat6', 'stat7', 'stat8', 'stat9', 'stat10', 'stat11', 'stat12' ],
  validate
}, null, { createAthletic })( NewAthletic );
