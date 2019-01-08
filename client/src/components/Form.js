import React from "react";
import { MDBAutocomplete, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import styled from 'styled-components';

const { citiesStates } = require('../citiesStates');

class Form extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    domain: "",
    location: "",
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                label="First Name"
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                label="Last Name"
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                label="Email"
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6" className="mb-2">
              <MDBInput
                label="www.yourdomainhere.com"
                value={this.state.domain}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="domain"
                placeholder="Your website"
                required
              />
            </MDBCol>
            <MDBCol md="6" className="mb-2">
              <MDBAutocomplete label="City / State" clear data={citiesStates} required />
            </MDBCol>
          </MDBRow>
          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default Form;