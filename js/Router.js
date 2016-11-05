import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import About from './components/About.js'
import Root from './components/Layout/Root.js'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Projects from './components/Projects'
import Chat from './components/Chat/Chat'
export default class MyRouter extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>

        <Route path={'/'} component={Root}>
          <IndexRoute component={Home}/>
          <Route path={'about'} component={About}/>
          <Route path={'projects'} component={Projects}/>
          <Route path={'chat'} component={Chat} />
        </Route>
        <Route path={'*'} component={NotFound} />
      </Router>
    )
  }
}
