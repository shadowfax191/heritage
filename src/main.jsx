import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Root from './assets/Components/Root';
import Home from './assets/Components/Home/Home';
import Resut from './assets/Components/BuyerSearchResult/Resut';
import Details from './assets/Components/Details/Details';
import About from './assets/Components/About/About';
import Buyer from './assets/Components/BuyerScreen/buyer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      
      },
      {
        path:'buyer',
        element:<Buyer></Buyer>
            
      },
      {
        path:'result',
        element:<Resut></Resut>
            
      },
      {
        path:'details',
        element:<Details></Details>
            
      },
      {
        path:'about',
        element:<About></About>
            
      },
      
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
