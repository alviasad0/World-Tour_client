import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx'
import ErrorPage from './Pages/Error Page/ErrorPage';
import Home from './Pages/Home Page/Home/Home.jsx';
import Login from './Pages/Login Page/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';


const router = createBrowserRouter([
  {
    path:'/',
    Element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path : '/',
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
