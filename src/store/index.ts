import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './symbiotes'

export const configureStore = () => {
  if (process.env.NODE_ENV !== 'production') {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  }
  return createStore(rootReducer, applyMiddleware(thunkMiddleware))
}
