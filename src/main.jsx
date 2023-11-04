import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx'
import ErrorPage from './Pages/Error Page/ErrorPage';
import Home from './Pages/Home Page/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    Element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path : '/',
        element: <Home></Home>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
