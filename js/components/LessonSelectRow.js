import React from 'react'
import { connect } from 'react-redux'

import MyButton from "./MyButton"
import Grade from "./Grade"
import TestModeButton from "./TestModeButton"
import LessonStatisticsButton from "./LessonStatisticsButton"

export default class LessonSelectRow extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var lesson = this.props.lesson
		var to = "/lessons/" + lesson.name
		return (
			<div className="row lesson-select-row-container">
				<div className="col-xs-12 col-sm-6 lesson-select-row-button-container">
					<MyButton to={to}>
						{lesson.name}
					</MyButton>
				</div>
				<div className="col-xs-6 col-sm-4 lesson-select-row-grade-container"><Grade /></div>
				<div className="col-xs-3 col-sm-1 lesson-select-row-testmodebutton-container"><TestModeButton /></div>
				<div className="col-xs-3 col-sm-1 lesson-select-row-lessonstatisticsbutton-container"><LessonStatisticsButton /></div>
			</div>
		)
	}
}
