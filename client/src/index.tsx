import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CreateGame from './Components/Routes/CreateTeam';
import User from './Components/Routes/UserDash';
import Game from './Components/Game/Game';
import PlayerForm from './Components/forms/PlayerForm';




const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayerForm/>,

    children: [
      {
        path: "/player",
        element: <PlayerForm />

      },
    ]
  },
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

