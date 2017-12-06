import React from 'react';
import LogoSVG from './logo.svg';
import styled, { keyframes } from 'react-emotion';

const dance = keyframes`
  0% {
    color: #32D59E;
  }
  25% {
    color: #D53232;
  }
  50% {
    color: #A132D5;
  }
  75% {
    color: #3278D5;
  }
  100% {
    color: #32D59E;
  }
`;

const LogoContainer = styled.div`
  animation ${dance} 1s step-end;
  color: #ffff;
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
