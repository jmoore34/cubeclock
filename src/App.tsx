import React from 'react';
import './App.css';
import cube from './cube.svg'
import styled from 'styled-components';
// @ts-ignore
import { Textfit } from 'react-textfit';

function App() {
  return (
    <CubeBackground>
      <StyledTextfit mode="single" forceSingleModeWidth={false} min={50} max={2000}>
        9:52
      </StyledTextfit>
    </CubeBackground>
  );
}

const StyledTextfit = styled(Textfit)`
  width: 100%;
  height: 100%;
  text-align: center;
  mix-blend-mode: hue;
  color: #aaec84;
  font-weight: 900;
  font-family: 'Arial Black', 'Arial', sans-serif
`;

const CubeBackground = styled.div`
  background: url(${cube});
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
  filter: hue-rotate(30deg);
`;

export default App;
