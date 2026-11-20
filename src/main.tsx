import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted editorial display + text typefaces (latin subset only)
import '@fontsource/cormorant-garamond/latin-400.css'
import '@fontsource/cormorant-garamond/latin-400-italic.css'
import '@fontsource/cormorant-garamond/latin-500.css'
import '@fontsource/cormorant-garamond/latin-600.css'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-500.css'
import '@fontsource/dm-sans/latin-600.css'

import './index.css'
import App from './App'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element #root was not found.')
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
