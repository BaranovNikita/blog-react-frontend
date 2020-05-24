import React from 'react'
import { List, Avatar, Space } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Description } from './Description'

interface Props {
  post: Post
}

export const IconText = ({ icon, text }: { icon: typeof MessageOutlined, text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const PostItem = ({ post }: Props) => (
  <List.Item
    actions={[
      <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
      <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
      <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
    ]}
    extra={
      <img
        width={272}
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
      />
    }
  >
    <List.Item.Meta
      avatar={<Avatar src={`https://picsum.photos/80?v=${post.id}`} />}
      title={<Link to={`/${post.alias}`}>{post.title}</Link>}
      description={<Description description={post.description} category={post.categories} createdDate={post.createdAt} />}
    />
    author: <Link to={`/author/${post.author}`}>{post.author}</Link>
  </List.Item>
)
