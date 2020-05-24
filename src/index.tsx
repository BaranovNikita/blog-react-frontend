import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.min.css'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
