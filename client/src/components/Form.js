import React from "react";
import { MDBContainer, MDBAutocomplete, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { Redirect } from 'react-router-dom';
import { log } from "util";

const { citiesStates } = require('../citiesStates');

class Form extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    domain: "",
    location: "",
    fireRedirect: false
  };

  checkValidation() {
    return this.formEl.checkValidity();
  }

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
    if (this.checkValidation()) {
      this.setState({ fireRedirect: true })
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { fireRedirect } = this.state;
    return (
      <div>
        <MDBContainer>
          <form
            ref={form => this.formEl = form}
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
                  className="form-control"
                  name="domain"
                  placeholder="Your website"
                  required
                />
              </MDBCol>
              <MDBCol md="6" className="mb-2">
                <MDBAutocomplete
                  value={this.state.location}
                  onChange={this.changeHandler}
                  label="City / State"
                  name="location"
                  data={citiesStates}
                  required
                  clear
                />
              </MDBCol>
            </MDBRow>
            <MDBBtn color="primary" type="submit"> Get Statistics </MDBBtn>
          </form>
        </MDBContainer>

        {fireRedirect && (
          <Redirect to={{
            pathname: '/results',
            state: { domain: this.state.domain, location: this.state.location }
          }} />
        )}

      </div>
    );
  }
}

export default Form;