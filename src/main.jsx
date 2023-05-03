import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './pages/Layout/Main';
import Home from './pages/Home/Home';
import Blog from './pages/Blog';
import ChefCard from './pages/ChefCard';
import ViewRecipe from './pages/ViewRecipe';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chef')
      },
      {
        path: '/cardData/:id',
        // element: <ChefCard></ChefCard>,
        element: <ViewRecipe></ViewRecipe>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
