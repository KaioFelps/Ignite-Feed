import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Esse ! quer dizer que, mesmo embora possa ser nulo, ele vai existir sim, "Confia!"