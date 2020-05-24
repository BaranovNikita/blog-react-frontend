import React from 'react'
import { Provider } from 'react-redux'

import { Router } from './router'
import { configureStore } from './store'

export const App = () => {
  const store = configureStore()
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
