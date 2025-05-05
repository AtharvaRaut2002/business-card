// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'            // your Tailwind imports
import { ThemeProvider } from './ThemeContext'  // <-- correct path!
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>          {/* ← wrap App here */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
