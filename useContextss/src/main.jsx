import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const name = "Denish";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App data={name} />
  </StrictMode>,
)
