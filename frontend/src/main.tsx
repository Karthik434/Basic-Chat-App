import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthContextProvider } from './Context/AuthContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import SocketContextProvider from './Context/socketContext.tsx'

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  //</StrictMode>,
)
