// client dom是基本结构
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './wdyr'
import './style.css'
import App from '@pages/App'
const container = document.getElementById('app')
createRoot(container!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
