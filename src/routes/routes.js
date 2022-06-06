import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from "../components/User"
import Home from '../containers/Home';
import Sidebar from "../components/Sidebar"
import Dashboard from '../components/Dashboard';
import Charts from "../components/Charts/Main"
import Inputs from "../components/Inputs"
// import Map from "../components/map/Maps"
export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/charts', element: <Charts /> },      
      { path: '/inputs', element: <Inputs/> },   
      { path: '/users', element: <Users/> },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
