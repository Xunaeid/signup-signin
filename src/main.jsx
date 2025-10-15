import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Root from './layout/Root.jsx'
import Home from './layout/Home.jsx'
import Login from './layout/Login.jsx'
import SignUp from './layout/SignUp.jsx'
import About from './layout/About.jsx'

const router = createBrowserRouter([
  {
      path: "/",
      Component: Root,
      children:[
        {
          index: true,
          Component: Home
        },

        {
          path: "login",
          Component: Login
        },
        {
          path: "signup",
          Component: SignUp
        },
        {
          path: "about",
          Component: About
        }
      ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
