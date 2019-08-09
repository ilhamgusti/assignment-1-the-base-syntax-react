import React, { Component } from 'react'
import './App.css'
import UserInput from './Users/UserInput'
import UserOutput from './Users/UserOutput'

class App extends Component {
	state = { username: 'ilhamgusti' }

	handlerInput = event => {
		this.setState({ username: event.target.value })
	}

	render() {
		return (
			<div className="App">
				<UserInput changed={this.handlerInput} username={this.state.username} />
				<UserOutput username={this.state.username} />
				<UserOutput username={this.state.username} />
			</div>
		)
	}
}

export default App
