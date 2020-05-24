import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/symbiotes'
import { getPosts, actions } from '../store/symbiotes/post'
import { PostList } from '../components/PostList'

export const Home = () => {
  const posts = useSelector((state: RootState) => state.posts)
  const { items, page } = posts
  const dispatch = useDispatch()

  const loadData = () => dispatch(getPosts())

  React.useEffect(() => {
    loadData()
  }, [page])

  const changePage = (page: number) => {
    dispatch(actions.page(page))
  }

  return <PostList items={items} page={page} changePage={changePage} pageSize={10} />
}
