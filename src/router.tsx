import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages'
import { BlogLayout } from './Layout'

export const Router = () => (
  <BrowserRouter>
    <BlogLayout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </BlogLayout>
  </BrowserRouter>
)
