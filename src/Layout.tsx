import React, { ReactNode } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Header, Footer, Content } = Layout

const BlogHeaderContainer = styled(Header)`
  a {
    color: white;
    &:hover {
      color: red;
      transition: color .3s;
    }
  }
`

const BlogContentContainer = styled(Content)`
  background: white;
  flex: 1;
  padding: 50px;
`

const BlogLayoutContainer = styled(Content)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface Props {
  children: ReactNode
}

export const BlogLayout = (props: Props) => (
  <BlogLayoutContainer>
    <BlogHeaderContainer>
      <Link to='/'>Blog</Link>
    </BlogHeaderContainer>
    <BlogContentContainer>{ props.children }</BlogContentContainer>
    <Footer>Baranov Nikita 2020</Footer>
  </BlogLayoutContainer>
)
