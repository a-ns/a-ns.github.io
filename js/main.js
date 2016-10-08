import React from 'react'
import ReactDOM from 'react-dom'
import MyRouter from './Router'

class App extends React.Component {
  render () {
    return (
      <MyRouter />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
