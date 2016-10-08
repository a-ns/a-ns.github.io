import React from 'react'

export default class Title extends React.Component {
  render () {
    return (
      <div>
      <h5>{this.props.title}</h5>
      <hr />
      </div>
    )
  }
}
