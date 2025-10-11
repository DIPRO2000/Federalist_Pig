import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Layout from './Components/Layout.jsx'
import Menus from './Pages/Menu Components/Menus.jsx'
import Catering from './Pages/Catering/Catering.jsx'


const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"/menus",
          element:<Menus/>
        },
        {
          path:"/catering",
          element:<Catering/>
        },
      ]
    }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
