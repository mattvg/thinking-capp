import React from 'react'

import QuizQuestionAnswer from './QuizQuestionAnswer'

export default class QuizQuestion extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		var question = this.props.question
		var answers = question.answers
		return (
			<div className="quiz-question">
				<div className="quiz-question-text">{question.question.en.text}</div>
				<div className="row">
					{answers.map(function(answer) {
						var key = answer.element
						return <QuizQuestionAnswer key={key} answer={answer} />
					})}
				</div>
			</div>
		)
	}
}