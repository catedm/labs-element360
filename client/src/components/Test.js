import React from "react";
import { MDBMask, MDBRow, MDBCol, MDBView, MDBContainer, MDBCard, MDBCardBody } from "mdbreact";
import Form from './Form';
import "./ContactFormPage.css";

class ContactFormPage extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div id="contactformpage">
        <MDBView>
          <MDBMask
            className="d-flex justify-content-center align-items-center"
            overlay="indigo-strong"
          >
            <MDBContainer>
              {/* <MDBRow>
                <h1 className="display-4 font-weight-bold">Lorem ipsum </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                  veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                  molestiae iste.
                  </h6>
              </MDBRow>
              <MDBRow>
                <MDBCard className="dark-grey-text">
                  <MDBCardBody className="z-depth-2">
                    <h3 className="dark-grey-text text-center">
                      <strong>Get Site Report:</strong>
                    </h3>
                    <hr />
                    <div>
                      <Form />
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow> */}
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="display-4 font-weight-bold">Lorem ipsum </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.
                  </h6>
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard className="dark-grey-text">
                    <MDBCardBody className="z-depth-2">
                      <h3 className="dark-grey-text text-center">
                        <strong>Get Site Report:</strong>
                      </h3>
                      <hr />
                      <div>
                        <Form />
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default ContactFormPage;