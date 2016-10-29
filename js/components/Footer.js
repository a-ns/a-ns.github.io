import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      // <footer className='z-depth-2 page-footer blue darken-1 container'>
      //   <div className='row valign-wrapper center'>
      //     <div className='col s1 m4 l2'><p>Lorem</p></div>
      //     <div className='col s1 m4 l8'><p>Ipsum</p></div>
      //     <div className='col s1 m4 l2'><a target='_blank' className='black-text text-lighten-3' href='http://www.github.com/a-ns'><img style={{height: '25.5px', width: '25.5px'}} src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' alt='' className='circle responsive-img'></img></a>
      //   </div>
      //   </div>
      // </footer>
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
               <li><a target='_blank' className='grey-text text-lighten-3' href='http://github.com/a-ns/a-ns.github.io'>Source Code</a></li>
               <li><a target='_blank' className='grey-text text-lighten-3' href='http://github.com/a-ns'>Github</a></li>
               <li><a target='_blank' className='grey-text text-lighten-3' href='https://facebook.github.io/react/'>React</a></li>
               <li><a target='_blank' className='grey-text text-lighten-3' href='http://MaterializeCSS.com'>MaterializeCSS</a></li>
               <li><a target='_blank' className='grey-text text-lighten-3' href='#!'></a></li>
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
