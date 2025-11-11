import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Layout from './Components/Layout.jsx'
import Menus from './Pages/Menu Components/Menus.jsx'
import Catering from './Pages/Menu Components/Catering.jsx'
import Caterings from './Pages/Caterings.jsx'
import Bbq_box from './Pages/BBQ_BOX.jsx'
import Supper from './Pages/Supper_club.jsx'
import Privacy from './Pages/Footer components/Privacy.jsx'


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
          path:"/caterings",
          element:<Caterings/>
        },
        {
          path:"/bbq_box",
          element:<Bbq_box/>
        },
        {
          path:"/supper_club",
          element:<Supper/>
        },

        {
          path:"/privacy",
          element:<Privacy/>
        },
      ]
    }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
