import React from 'react'

export default class Chat extends React.Component {
  constructor () {
    super ()
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
    return <div className='collection-item'>{message.date.toISOString().replace(/T/, ' ').replace(/\..+/, '')} : {message.text}</div>
  }

  submitMessage (event) {
    console.log('Submitting message : ' + this.state.currentMessage)
    const nextMessage = {
      date: new Date(),
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
      <div>
        <div className='collection'>
          {this.state.messages.map(this.formatMessage)}
        </div>
        <input onChange={this.updateMessage} type='text' placeholder='Message' value={this.state.currentMessage}/>
        <br />
        <button className='btn' onClick={this.submitMessage}>Submit Message</button>
      </div>
    )
  }
}
