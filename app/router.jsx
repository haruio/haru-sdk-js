/**
 * Created by pheadra on 7/8/15.
 */

import React from 'react';
import { Routes, Route, DefaultRoute, NotFoundRoute } from 'react-router';


import App from './pages/app.jsx';
import Main from './pages/main.jsx'

import NotFound from './pages/NotFound.jsx'

const routes = (
    <Route name="app" path="/" handler={ App }>
      <DefaultRoute handler={ Main }/>
      <NotFoundRoute handler={ NotFound }/>
    </Route>

)

export default routes
