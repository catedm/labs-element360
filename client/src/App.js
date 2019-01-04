import React, { Component } from 'react';

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
      <div>Home</div>
    );
  }
}

export default App;
