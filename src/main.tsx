import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Countries from './pages/Countries'
import CountriesDetails from './pages/CountriesDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Countries />,
    errorElement: <div>Error 404</div>
  },
  {
    path: '/details/:name',
    element: <CountriesDetails />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
