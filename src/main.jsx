import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import './index.css'
import Dashboard from './routes/Dashboard/Dashboard.jsx'
import About from './routes/About/About.jsx'
import Contact from './routes/Contact/Contact.jsx'

const router = createBrowserRouter ([
  {
    path: '/', 
    element:<App/>, 
    errorElement:<Error/>,
    
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
