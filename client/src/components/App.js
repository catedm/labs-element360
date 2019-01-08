import React, { Component } from 'react';
import Form from './Form';
import { MDBContainer } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
  state = {}

  componentDidMount() {
    this.connecToServer();
  }

  connecToServer() {
    fetch('/');
  }

  render() {
    return (
      <div>
        <MDBContainer>
          <Form />
        </MDBContainer>
      </div>
    );
  }
}

export default App;