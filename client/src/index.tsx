import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CreateGame from './routes/CreateTeam';
import User from './routes/UserDash';
import Game from './Components/Game/Game';
import PlayerForm from './Components/forms/PlayerForm';
import Root from './routes/root';
import CreateTeam from './routes/CreateTeam';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>
  },
  {
    path: "/createTeam",
    element: <CreateTeam/>
  }
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

