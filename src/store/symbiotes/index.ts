import { combineReducers } from 'redux'

import { reducer as posts, PostState } from './post'

const reducers = {
  posts
}

export const rootReducer = combineReducers(reducers)

export type RootState = {
  posts: PostState
}
