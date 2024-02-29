import React from 'react'
import ReactDOM from 'react-dom/client'
import Countries from './pages/Countries'
import Navbar from './components/Navbar'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Countries />
  </React.StrictMode>,
)
