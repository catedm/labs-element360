import React, { Component } from 'react'
import Loader from './Loader';

export default class Results extends Component {

  state = {
    // domain: this.props.location.state.domain,
    // location: this.props.location.state.location,
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000);
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Loader />
        </div>
      )
    } else {
      return (
        <h1>Done!</h1>
      )
    }
  }
}
