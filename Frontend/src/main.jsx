/* Hooks and libreries */
import ReactDOM from 'react-dom/client'
import React from 'react'

// Components and other files
import './assets/styles/variables.css';
import './assets/styles/globals.css';
import './assets/styles/header.css';
import './assets/styles/footer.css';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
