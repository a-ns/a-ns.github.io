import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header.js'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import About from './components/About.js'
import Root from './components/Root.js'
import Home from './components/Home'
class App extends React.Component {
  constructor () {
    super()
  }

  changeTitle (title) {
    this.setState({title})
  }

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
/*
<div>
  <Header title={this.state.title}/>
    <div className='container'>
      <Body placeholder={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
    </div>
</div>
*/
