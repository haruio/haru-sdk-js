import './styles.css'

import debug from 'debug'
import React from 'react'
import Router from 'react-router';
import routes from './router.jsx'
import 'html5shiv'
import './lib/jquery-1.9.1.min.js'

const log = debug('application:bootstrap')

// Enable debug messages outside of production
if (process.env.NODE_ENV !== 'production') {
  debug.enable('application:*')
}

/* Initializing touch events */
React.initializeTouchEvents(true);


log('mounting react-router')
// TODO : 호환성 채크를 해야함..
// History Location의 경우 html5 history 를 사용하기 때문에 지원안하는 브라우저가 있을 수 있음
// History Location을 지원하지 않는 브라우저에서는 RefreshLocation 적용
Router.run(routes,  Router.HistoryLocation, Handler => React.render(<Handler />, document.body));




