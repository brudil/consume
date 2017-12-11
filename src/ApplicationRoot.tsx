import React from 'react';
import { Logo } from './components/Logo/index';
import styled, { keyframes } from 'react-emotion';

const dance = keyframes`
  0% {
    background: #32D59E;
  }
  25% {
    background: #D53232;
  }
  50% {
    background: #A132D5;
  }
  75% {
    background: #3278D5;
  }
  100% {
    background: #32D59E;
  }
`;

const Background = styled.div`
  animation: ${dance} 1s step-end;
  background: #32d59e;
  min-height: 100vh;
  overflow: auto;
  font-family: "Roboto Condensed", sans-serif;
`;

const Tagline = styled.div`
  color: #3278D5;
  text-align: center;
  font-size: 2rem;
`;

export class Application extends React.Component {
  render() {
    return <Background>
        <h1>
          <Logo />
        </h1>
        <Tagline>social drinking games</Tagline>
      </Background>;
  }
}
