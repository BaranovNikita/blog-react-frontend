import React, { ReactNode } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

const { Header, Footer, Content } = Layout

const BlogHeaderContainer = styled(Header)`
  color: white;
  &:hover {
    color: red;
    transition: color .3s;
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
    <BlogHeaderContainer>Header</BlogHeaderContainer>
    <BlogContentContainer>{ props.children }</BlogContentContainer>
    <Footer>Footer</Footer>
  </BlogLayoutContainer>
)
