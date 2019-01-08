import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';
import { MDBContainer } from 'mdbreact';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../App.css';

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
        <Header />
        <MDBContainer>
          <Form />
        </MDBContainer>
      </div>
    );
  }
}

export default App;