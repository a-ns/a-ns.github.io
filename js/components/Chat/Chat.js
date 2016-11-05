import React from 'react'

export default class Chat extends React.Component {
  constructor () {
    super()
    this.state = {
      messages: [
      ],
      currentMessage: ''
    }
    this.formatMessage = this.formatMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.updateMessage = this.updateMessage.bind(this)
  }

  componentWillMount () {
    this.setState({messages: [{date: '', text: 'Connecting to chat . . .'}]})
  }
  componentDidMount () {
    this.setState({messages: [{date: '', text: 'Connected to chat!'}]})
    firebase.database().ref('messages/').on('value', (snapshot) => {
      let currentMessages = snapshot.val()
      console.log(currentMessages)
      if (currentMessages != null) {
        this.setState({
          messages: currentMessages
        })
      }
    })
  }

  formatMessage (message) {
    return <div className='collection-item'>{message.date} : {message.text}</div>
  }

  submitMessage (event) {
    event.preventDefault()
    console.log('Submitting message : ' + this.state.currentMessage)
    const nextMessage = {
      date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      text: this.state.currentMessage
    }

    this.setState({currentMessage: ''})
    firebase.database().ref('messages/' + this.state.messages.length).set(nextMessage)
  }

  updateMessage (event) {
    console.log('updateMessage: ' + event.target.value)
    this.setState({
      currentMessage: event.target.value
    })
  }

  render () {
    return (
      <div id='chat'>
        <div className='collection'>
          {this.state.messages.map(this.formatMessage)}
        </div>
        <form>
          <input id='chatInput'submit={this.submitMessage} onChange={this.updateMessage} type='text' placeholder='Message' value={this.state.currentMessage}/>
          <br />
          <button className='btn blue darken-1' onClick={this.submitMessage}>Submit Message</button>
        </form>
      </div>
    )
  }
}
