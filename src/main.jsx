/*import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {rutas} from './router/router';

import {RouterProvider} from "react-router-dom";
// import { Home } from "./layout/home/Home";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={ rutas }/>
        {/ <Home/> /}
    </React.StrictMode>
);*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import { MainApp } from './router/MainApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp/>
    </BrowserRouter>
  </React.StrictMode>,
)
 