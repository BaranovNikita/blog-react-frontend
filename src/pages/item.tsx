import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography } from 'antd'
import { RootState } from '../store/symbiotes'
import { getPost } from '../store/symbiotes/post'
import { Description } from '../components/Description'


export const Item = () => {
  const posts = useSelector((state: RootState) => state.posts)
  const { items } = posts
  const dispatch = useDispatch()
  const { alias } = useParams<{ alias: string }>()

  const loadData = () => dispatch(getPost(alias))

  React.useEffect(() => {
    loadData()
  }, [])

  if (items.length) {
    const post = items[0]
    return (
      <div>
        <Typography.Title level={1}>{ post.title }</Typography.Title>
        <Description description={post.description} category={post.categories} createdDate={post.createdAt} />
        <Typography.Text>
          <span dangerouslySetInnerHTML={{ __html: post.text }} />
        </Typography.Text>
      </div>
    )
  }
  return null
}
