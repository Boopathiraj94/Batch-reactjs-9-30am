import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Employees from './components/Employees'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Employees />
  </StrictMode>,
)
