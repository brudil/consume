import React from 'react';
import LogoSVG from './logo.svg';
import styled, { keyframes } from 'react-emotion';

const dance = keyframes`
  0% {
    color: #3278D5;
  }
  25% {
    color: #32D59E;
  }
  50% {
    color: #D53232;
  }
  75% {
    color: #A132D5;
  }
  100% {
    color: #3278D5;
  }
`;

const LogoContainer = styled.div`
  animation ${dance} 1s step-end;
  color: #3278D5;
  text-align: center;
  padding-top: 1rem;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoSVG />
    </LogoContainer>
  );
}

export { Logo };
