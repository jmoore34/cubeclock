import React from 'react';
import './App.css';
import cube from './cube.svg'
import styled from 'styled-components';

function App() {
  return (
    <CubeBackground>

    </CubeBackground>
  );
}

const CubeBackground = styled.div`
  background-image: url(${cube});
  background-repeat: repeat;
  width: 100vw;
  height: 100vh;
`;

export default App;
