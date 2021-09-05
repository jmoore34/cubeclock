import React from 'react';
import './App.css';
import cube from './cube.svg'
import styled, { keyframes } from 'styled-components';
// @ts-ignore
import { Textfit } from 'react-textfit';
import { useTime } from './util';
import screenfull from 'screenfull';

function App() {

  const time = useTime()

  return (
    <Wrapper onClick={e => screenfull.isEnabled && screenfull.toggle(document.documentElement)} hideCursor={screenfull.isEnabled && screenfull.isFullscreen}>
      <CubeBackground />
      <StyledTextfit mode="single" forceSingleModeWidth={false} min={50} max={2000}>
        {time}
      </StyledTextfit>
    </Wrapper>
  );
}

const Wrapper = styled.div<{hideCursor: boolean}>`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  ${props => props.hideCursor && "cursor: none;"}
`;

const hueRotate = keyframes`
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(360deg);
  }
`;

const translate = keyframes`
  from {
    transform: translate(-156px, -300px);

  }

  to {
    transform: translate(0px, 0px);
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
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CubeBackground = styled.div`
  background: url(${cube});
  background-repeat: repeat;
  width: calc(100vw + 156px);
  height: calc(100vh + 300px);
  z-index: 1;
  position: absolute;
  background-size: 156px 300px;
  animation: ${translate} linear infinite 3s;
`;

export default App;
