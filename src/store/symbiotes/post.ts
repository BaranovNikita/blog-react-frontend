import { createSymbiote } from 'redux-symbiote'
import { Dispatch } from 'redux'
import axios from 'axios'

enum PostStatus {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}

export interface PostState {
  items: Post[],
  status: PostStatus,
  error?: string,
  page: number,
  total: number
}

export const initialState: PostState = {
  items: [],
  status: PostStatus.IDLE,
  page: 1,
  total: 0
}

const symbiotes = {
  load: {
    start: (state: PostState) => ({ ...state, status: PostStatus.LOADING }),
    failed: (state: PostState, error: string) => ({ ...state, status: PostStatus.ERROR, error }),
    finish: (state: PostState, items: Post[]) => ({ ...state, status: PostStatus.SUCCESS, items }),
  },
  page: (state: PostState, page: number) => ({ ...state, page }),
  total: (state: PostState, total: number) => ({ ...state, total })
}

export const { actions, reducer } = createSymbiote(initialState, symbiotes)

export const getPosts = () => async (dispatch: Dispatch, getState: () => PostState) => {
  dispatch(actions.load.start())
  const { page } = getState()

  try {
    const { data } = await axios.get('/post', {
      params: {
        page
      }
    })
    dispatch(actions.load.finish(data))
  } catch (err) {
    dispatch(actions.load.failed(err.message))
  }
}

export const getTotal = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await axios.get('/post/count')
    dispatch(actions.total(data))
  } catch (err) {
    console.error(err)
  }
}
