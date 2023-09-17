import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CreateGame from './Components/Routes/CreateTeam';

import SignIn from './Components/Users/user.view';
import User from './Components/Routes/UserDash';
import Game from './Components/Game/Game';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Game/>,

    children: [
      {
        path: "signup",
        element: <CreateGame />

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

