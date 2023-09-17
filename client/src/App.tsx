import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Routes/initialForm';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import Game from './Components/Game/Game';
import CreateGame from './Components/Routes/CreateTeam';
import SignIn from './Components/Users/user.view';



function App() {
    return (
      <>
        <SignIn/>
      </>
    );
  }



export default App;
