import React from 'react'
import {Link} from 'react-router'

export default class Navbar extends React.Component {
  render () {
    return (
      <header className='navbar-fixed'>
        <nav className='green accent-4'>
          <div className='nav-wrapper container'>
            <Link to='/' className='brand-logo left'>a-ns</Link>
            <ul className='right hide-on-med-and-down'>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
