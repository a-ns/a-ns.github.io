import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import About from './components/About.js'
import Root from './components/Root.js'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Network from './components/Network'
export default class MyRouter extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>


        <Route path={'/'} component={Root}>
          <IndexRoute component={Home}/>
          <Route path={'about'} component={About}/>
          <Route path={'network'} component={Network}/>
        </Route>
        <Route path={'*'} component={NotFound} />
      </Router>
    )
  }
}
