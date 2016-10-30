import React from 'react'

export default class Footer extends React.Component {
  constructor () {
    super()
    this.state = {
      links: []
    }
    this.state.links.push({'link': 'http://github.com/a-ns/a-ns.github.io', 'text': 'Source Code'})
    this.state.links.push({'link': 'http://github.com/a-ns', 'text': 'Github'})
    this.state.links.push({'link': 'https://facebook.github.io/react/', 'text': 'React'})
    this.state.links.push({'link': 'http://MaterializeCSS.com', 'text': 'MaterializeCSS'})
  }

  formatLink (link) {
    return <li><a target='_blank' className='grey-text text-lighten-3' href={link.link}> {link.text} </a></li>
  }
  render () {
    return (
      <footer className='page-footer blue darken-1'>
       <div className='container'>
         <div className='row'>
           <div className='col l6 s12'>
             <h5 className='white-text'>Footer Content</h5>
             <p className='grey-text text-lighten-4'>You can use rows and columns here to organize your footer content.</p>
           </div>
           <div className='col l4 offset-l2 s12'>
             <h5 className='white-text'>Links</h5>
             <ul>
               {this.state.links.map(this.formatLink)}
             </ul>
           </div>
         </div>
       </div>
       <div className='footer-copyright'>
         <div className='container'>
         © 2014 Copyright Text
         <a className='grey-text text-lighten-4 right' href='#!'>More Links</a>
         </div>
       </div>
     </footer>
    )
  }
}
