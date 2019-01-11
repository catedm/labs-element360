import React, { Component } from 'react'
import { Spinner, MDBContainer, Progress } from 'mdbreact';
import styled from 'styled-components';

class Loader extends Component {
  render() {
    return (
      <div>
        <MDBContainer style={centerText}>
          <Title>{this.props.title}</Title>
          <Progress material value={this.props.progressBarValue} animated />
        </MDBContainer>
      </div>
    )
  }
}

const centerText = {
  textAlign: 'center',
  marginBottom: '50px',
}

const Title = styled.h2`
  margin-bottom: 35px;
`

export default Loader;
