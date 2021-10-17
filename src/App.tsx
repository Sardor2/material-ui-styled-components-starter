import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button";
import styled from "styled-components";
import {Box} from "@mui/material";

const StyledButton = styled(Button) `
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.text.light};
  width: 400px;
  &:hover {
    background-color: dodgerblue;
  }
`

const AppWrapper = styled(Box) ` 
  text-align: center;
`

const AppHeader = styled.header `
  background-color: ${props => props.theme.bg.main};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.text.main};
`

function App() {
  return (
    <AppWrapper className="App">
      <AppHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StyledButton
        >
          Learn React
        </StyledButton>
      </AppHeader>
    </AppWrapper>
  );
}


export default App;
