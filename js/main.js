import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import About from './components/About.js'
import Root from './components/Root.js'
import Home from './components/Home'
class App extends React.Component {

  render () {
    return (
      <Router history={browserHistory}>
        <Route path={'/'} component={Root}>
          <IndexRoute component={Home}/>
          <Route path={'about'} component={About}/>

        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
