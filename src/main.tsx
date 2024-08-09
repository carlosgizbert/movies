import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from '@/ui/styles'
import { ThemeProvider } from '@/ui/theme/index.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
