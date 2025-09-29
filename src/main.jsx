import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RenopTemplate from './RenopTemplate'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RenopTemplate />
  </StrictMode>,
)
