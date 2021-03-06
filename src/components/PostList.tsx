import React from 'react'
import { PostItem } from './Post'
import { List } from 'antd'

interface Props {
  items: Post[],
  changePage: (page: number) => void,
  pageSize: number,
  page: number,
  total: number
}

export const PostList = (props: Props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        total: props.total,
        current: props.page,
        onChange: page => {
          props.changePage(page);
        },
        pageSize: props.pageSize,
      }}
      dataSource={props.items}
      renderItem={item => <PostItem post={item} />}
    />
  )
}
