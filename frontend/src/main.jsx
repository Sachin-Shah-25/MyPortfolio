import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContext, AppProvider } from './AppContext/AppContext.jsx'

createRoot(document.getElementsByClassName("main")[0]).render(
      <StrictMode>
    <App />
  </StrictMode>
)
