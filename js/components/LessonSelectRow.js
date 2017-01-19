import React from 'react'
import { connect } from 'react-redux'

import MyButton from "./MyButton"
import Grade from "./Grade"
import TestModeButton from "./TestModeButton"
import LessonStatisticsButton from "./LessonStatisticsButton"

class LessonSelectRow extends React.Component {
	constructor(props) {
		super(props)
	}

	onClick(event) {
		var lesson = this.props.lesson
		var dispatch = this.props.dispatch
		dispatch({type: "LOAD_LESSON", payload: {lesson, dispatch} })
	}

	render() {
		console.log("lsr")
		var lesson = this.props.lesson
		var to = "/lessons/" + lesson.name
		return (
			<div className="row lesson-select-row-container">
				<div className="col-xs-12 col-sm-12 col-md-4 lesson-select-row-button-container" onClick={this.onClick.bind(this)}>
					<MyButton to={to}>
						{lesson.name}
					</MyButton>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-3"><div className="lesson-select-row-grade-container"><Grade /></div></div>
				<div className="col-xs-12 col-sm-3 col-md-2 sm-border"><div className="lesson-select-row-testmodebutton-container"><TestModeButton /></div></div>
				<div className="col-xs-12 col-sm-3 col-md-2 sm-border"><div className="lesson-select-row-lessonstatisticsbutton-container"><LessonStatisticsButton /></div></div>
			</div>
		)
	}
}

export default connect(state => ({ lessons: state.lessons }))(LessonSelectRow)
