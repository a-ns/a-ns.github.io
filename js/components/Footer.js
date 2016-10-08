import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className='z-depth-2 page-footer blue darken-1 container'>
        <div className='row valign-wrapper center'>
          <div className='col s1 m4 l2'><p>Lorem</p></div>
          <div className='col s1 m4 l8'><p>Ipsum</p></div>
          <div className='col s1 m4 l2'><a target='_blank' className='black-text text-lighten-3' href='http://www.github.com/a-ns'><img style={{height: '25.5px', width: '25.5px'}} src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' alt='' className='circle responsive-img'></img></a>
        </div>
        </div>
      </footer>
    )
  }
}
