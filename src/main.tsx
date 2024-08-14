import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from '@/ui/styles'
import { ThemeProvider } from '@/ui/theme/index.tsx'
import { ReactQueryProvider } from '@/config/cache'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <ThemeProvider>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ReactQueryProvider>
  </StrictMode>,
)
