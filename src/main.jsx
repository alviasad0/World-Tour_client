import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import Root from './Root/Root.jsx'
import ErrorPage from './Pages/Error Page/ErrorPage';
import Home from './Pages/Home Page/Home/Home.jsx';
import Login from './Pages/Login Page/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import AllPackages from './Pages/All packages/AllPackages';
import Details from './Pages/Details/Details';
import PrivateRouter from './PrivateRoute/PrivateRouter';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyPackages from './Pages/myPackage/MyPackages';
import PackageUpdate from './Pages/PackageUpdate/PackageUpdate';
import MySchedules from './Pages/MySchedules/MySchedules';
import React from 'react';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/Contact Us/ContactUs';
import TermsAndConditions from './Pages/Terms and Conditions/TermsAndConditions';


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
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>
      },
      {
        path: "/allPackages",
        element: <AllPackages></AllPackages>,
        loader: ()=> fetch('http://localhost:5000/allServices')
      },
      {
        path : "/packageDetails/:id",
        element: <PrivateRouter><Details></Details></PrivateRouter>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allServices/${params.id}`),

      },
      {
        path: "/addService",
        element: (
          <PrivateRouter>
            <AddProduct></AddProduct>
          </PrivateRouter>
        ),
      },
      {
        path: "/mySchedules",
        element: (
          <PrivateRouter>
            <MySchedules></MySchedules>
          </PrivateRouter>
        ),
        loader : ()=>fetch(`http://localhost:5000/booked`)
      },
      {
        path: "/updatePackage/:id",
        element: (
          <PrivateRouter>
            <PackageUpdate></PackageUpdate>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addPackage/${params.id}`),
      },
      {
        path: "/myPackages",
        element: (
          <PrivateRouter>
            <MyPackages></MyPackages>
          </PrivateRouter>
        ),
        loader : ()=>fetch(`http://localhost:5000/addPackage`)
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
