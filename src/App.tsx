import React from 'react';
import './App.css';
import cube from './cube.svg'
import styled, { keyframes } from 'styled-components';
// @ts-ignore
import { Textfit } from 'react-textfit';
import { useTime } from './util';

function App() {

  const time = useTime()

  return (
    <CubeBackground>
      <StyledTextfit mode="single" forceSingleModeWidth={false} min={50} max={2000}>
        {time}
      </StyledTextfit>
    </CubeBackground>
  );
}

const hueRotate = keyframes`
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(360deg);
  }
`;

const StyledTextfit = styled(Textfit)`
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: 900;
  font-family: 'Arial Black', 'Arial', sans-serif;
  color: hsl(220deg, 50%, 50%);
  background-color: hsl(120deg, 50%, 50%);
  mix-blend-mode: hue;
  animation: ${hueRotate} linear infinite 40s;
`;

const CubeBackground = styled.div`
  background: url(${cube});
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
`;

export default App;
