import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default class Root extends React.Component {

  render () {
    return (
      <div id='the-app'>
        <Header />
        <main className='container the-site'>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}
