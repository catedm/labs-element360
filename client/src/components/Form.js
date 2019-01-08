import React from "react";
import { MDBAutocomplete, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const { citiesStates } = require('../citiesStates');

class FormsPage extends React.Component {
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
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                First name
              </label>
              <input
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
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
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Domain
              </label>
              <input
                value={this.state.domain}
                onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="domain"
                placeholder="Your website"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="6" className="mb-2">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Location
              </label>
              <MDBAutocomplete label="City / State" clear data={citiesStates} required />
              <div className="invalid-feedback">
                Please select a city/state.
              </div>
              <div className="valid-feedback">Looks good!</div>
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

export default FormsPage;