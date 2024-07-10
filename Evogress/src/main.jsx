import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Career from './Pages/Career.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "career",
    element:<Career/>,
  },
  {
    path: "about",
    element:<About/>,
  },
  {
    path: "services",
    element:<Services/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
