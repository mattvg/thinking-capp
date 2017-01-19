import React from 'react'
import { connect } from 'react-redux'

import BackArrow from './BackArrow'
import Loading from './Loading'
import MyButton from './MyButton'
import QuizQuestion from './QuizQuestion'
import QuizCountdown from './QuizCountdown'

class QuizComplete extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var oactivity = this.props.activity.toJS()
		var correct = oactivity.correct
		var attempts = oactivity.attempts
		var to = "/lessons"
		return (
			<div className="main">
				<h1>Quiz Complete!</h1>
				<BackArrow to={to} />
				<p>You got {correct} out of {attempts} correct.</p>
			</div>
		)
	}
}

export default connect(state => ({ lessons: state.lessons, activity: state.activity }))(QuizComplete)
