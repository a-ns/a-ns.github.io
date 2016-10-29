import React from 'react'

export default class Projects extends React.Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
    this.state.projects.push({'title': 'Andante', 'desc': 'Developed at the University of West Florida\'s Codefest 2016, Andante is a simple music quiz application made in Java for the desktop.',
                            'link': 'http://github.com/a-ns/andante',
                            'icon': '../../../img/andante.png'
                            })
    this.state.projects.push({'title': 'Twitch Bot', 'desc': 'A simple twitch bot that reacts to commands in chat.',
                            'link': 'http://github.com/a-ns/twitch-bot',
                            'icon': '../../../img/twitch.png'
                            })
  }

  formatProject (project) {
    return <div>
      <div className='col s12 m7'>
        <h5 className='header'>{project.title}</h5>
        <div className='card horizontal'>
          <div classNames='card-image responsive-img'>
            <img src= {project.icon}/>
          </div>
          <div className='card-stacked'>
            <div className='card-content'>
              <p>{project.desc}</p>
            </div>
            <div className='card-action'>
              <a className='blue-text' target='_blank' href={project.link}>Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  render () {
    return (
      <div id = 'projects'>
        {this.state.projects.map(this.formatProject)}
      </div>
    )
  }
}
