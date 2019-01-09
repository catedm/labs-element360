import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <HeaderInner>
          <Title>Element-360 Labs</Title>
        </HeaderInner>
      </HeaderWrapper>
    </div>
  )
}

const Title = styled.h1`
  color: #fff;
`

const HeaderWrapper = styled.div`
  background: -webkit-linear-gradient(50deg,#45cafc,#303f9f)!important;
  background: -o-linear-gradient(50deg,#45cafc,#303f9f)!important;
  background: linear-gradient(40deg,#45cafc,#303f9f)!important;
  padding: 20px;
  margin-bottom: 35px;
`

const HeaderInner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`

export default Header;