import React from "react"
import { Route } from "react-router"

import AppContainer from "./AppContainer"
import HomePage from "./pages/HomePage"

export default (
  <Route component={ AppContainer }>
    <Route path='/' component={ HomePage } />
  </Route>
)
