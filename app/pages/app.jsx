/**
 * Created by pheadra on 7/8/15.
 */
import React from 'react';
import ReactRouter, { RouteHandler } from 'react-router';

import Header from '../components/Header'

const App = React.createClass({
  componentDidMount() {

  },
  render() {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    )
  }
})


export default App
