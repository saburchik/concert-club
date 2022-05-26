import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const storeApp = store()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={storeApp}>
      <App />
    </Provider>
  </React.StrictMode>
)
