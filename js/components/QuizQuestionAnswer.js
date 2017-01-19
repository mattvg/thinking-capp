import React from 'react'
import { connect } from 'react-redux'

import TCElement from './TCElement'

class QuizQuestionAnswer extends React.Component {

	constructor(props) {
		super(props)
		var answer = this.props.answer
		var name = answer.element
		var dispatch = this.props.dispatch
		console.log(["Going to laod", name])
		dispatch({type: "LOAD_ELEMENT", payload: {name, dispatch} })
	}

	onClick(event) {
		console.log("clicked answer")
		var answer = this.props.answer
		console.log(answer)
		this.props.dispatch({type: "ANSWER_QUESTION", payload: {answer} })
	}

	render() {
		var answer = this.props.answer
		return (
			<div className="quiz-question-answer" onClick={this.onClick.bind(this)}>
				<TCElement name={answer.element} />
			</div>
		)
	}
}

export default connect(state => ({ activity: state.activity }))(QuizQuestionAnswer)
