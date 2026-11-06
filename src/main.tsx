import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/reset.css'
import '@/styles/variables.css'
import '@/styles/global.css'
import '@/locales/i18n.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
