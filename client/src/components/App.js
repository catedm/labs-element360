import React, { Component } from 'react';
import Form from './Form';
import Results from './Results';
import Header from './Header';
import ContactFormPage from './Test';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
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
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/test" component={ContactFormPage} />
            <Route exact path="/results" component={Results} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;