import React from 'react';
import { Spinner, MDBContainer } from 'mdbreact';
import styled from 'styled-components';

const Loader = () => {
  return (
    <div>
      <MDBContainer style={centerText}>
        <Title>Generating Report...</Title>
        <Spinner big multicolor />
      </MDBContainer>
    </div>
  )
}

const centerText = {
  textAlign: 'center',
}

const Title = styled.h2`
  margin-bottom: 35px;
`

export default Loader;
