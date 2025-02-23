import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/app/App.jsx'
import { AppProvider } from './context.jsx'
import { BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Router>
      <App />
      </Router>       
    </AppProvider>    
  </StrictMode>,
)
