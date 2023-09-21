import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Routes/initialForm';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import Game from './Components/Game/Game';
import CreateGame from './Components/Routes/CreateTeam';
import PlayerForm from './Components/forms/PlayerForm';


function App() {
    return (
      <>
        <PlayerForm/>
      </>
    );
  }



export default App;
