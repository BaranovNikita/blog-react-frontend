import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages'
import { BlogLayout } from './Layout'
import { Item } from './pages/item'

export const Router = () => (
  <BrowserRouter>
    <BlogLayout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/:alias'>
          <Item />
        </Route>
      </Switch>
    </BlogLayout>
  </BrowserRouter>
)
