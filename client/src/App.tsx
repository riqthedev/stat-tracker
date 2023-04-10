import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Forms/initialForm';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import Game from './Components/Game/Game';
import CreateGame from './Components/Forms/CreateTeam';



function App() {


  

  const getPlayers = () => {
    // axios.get('http://stat-tracker/players')
    // .then(res => {
    //   console.log(res)
    // }).catch(err => console.log(err))

  }


  const postPlayers = newPlayer => {
    ////////'
  }


  // const inputChange = (name, value) => {
  //   setValues({
  //     ...values,
  //     [name]:value
  //   })

  //   const formSubmit = () => {
  //     const newPlayer = {
  //       name: values.name.trim(),
  //       number: values.number.trim()
  //     }
  //   }

    return (
      <>
        <CreateGame/>
      </>
    );
  }



export default App;
