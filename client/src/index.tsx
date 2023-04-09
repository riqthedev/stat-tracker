import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CreateGame from './Components/Forms/CreateTeam';





const router = createBrowserRouter([{
  path:"/stat-tracker",
  element: <CreateGame/>,
},
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
);

