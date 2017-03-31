import React from 'react'
import { connect } from 'react-redux'

import BackArrow from './BackArrow'
import Loading from './Loading'
import MyButton from './MyButton'
import QuizQuestion from './QuizQuestion'
import QuizComplete from './QuizComplete'
import QuizCountdown from './QuizCountdown'

class Quiz extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var oactivity = this.props.activity.toJS()
		console.log(oactivity)
		var question_num = oactivity.question_num
		var olessons = this.props.lessons.toJS()
		var loaded_name = oactivity.loaded_name
		var loaded = oactivity.loaded
		var quiz = loaded.quiz
		if (quiz == undefined) {
			return <Loading />
		}
		var questions = quiz.questions
		if (loaded == undefined || questions == undefined) {
			return <Loading />
		}
		if (loaded.name == "error") {
			return (
				<div>
					{loaded.error}
				</div>
			)
		}
		var num_questions = questions.length
		if (question_num >= num_questions) {
			return <QuizComplete />
		}
		var question = questions[question_num]
		var to = "/lessons/" + loaded_name
		return (
			<div className="main">
				<BackArrow to={to} />
				<QuizCountdown pos={question_num} total={num_questions} />
				<QuizQuestion question={question} />
			</div>
		)
	}
}

export default connect(state => ({ lessons: state.lessons, activity: state.activity }))(Quiz)
