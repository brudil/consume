import React from 'react';
import { Logo } from './components/Logo/index';
import styled, { keyframes } from 'react-emotion';

const white = keyframes`
  0% {
    background: #fff;
  }
  100% {
    background: #fff;
  }
`

const Background = styled.div`
  animation: ${white} 1s step-end;
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
