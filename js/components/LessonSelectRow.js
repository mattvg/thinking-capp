import React from 'react'
import { connect } from 'react-redux'

import MyButton from "./MyButton"
import Grade from "./Grade"
import StudyModeButton from "./StudyModeButton"
import SortingModeButton from "./SortingModeButton"
import TestModeButton from "./TestModeButton"
import LessonStatisticsButton from "./LessonStatisticsButton"

class LessonSelectRow extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log("lsr")
		var lesson = this.props.lesson
		var to = "/lessons/" + lesson.name
		return (
			<div className="row lesson-select-row-container">
				<div className="col-xs-12 col-sm-12 col-md-4 lesson-select-row-button-container">
					{lesson.name}
				</div>
				<div className="col-xs-12 col-sm-4 col-md-3"><div className="lesson-select-row-grade-container"><Grade /></div></div>
				<div className="col-xs-4 col-sm-2 col-md-1 sm-border"><div className="lesson-select-row-testmodebutton-container"><StudyModeButton lesson={lesson} /></div></div>
				<div className="col-xs-4 col-sm-2 col-md-1 sm-border"><div className="lesson-select-row-testmodebutton-container"><SortingModeButton lesson={lesson} /></div></div>
				<div className="col-xs-4 col-sm-2 col-md-1 sm-border"><div className="lesson-select-row-testmodebutton-container"><TestModeButton lesson={lesson} /></div></div>
				<div className="col-xs-12 col-sm-2 col-md-2 sm-border"><div className="lesson-select-row-lessonstatisticsbutton-container"><LessonStatisticsButton lesson={lesson} /></div></div>
			</div>
		)
	}
}

export default connect(state => ({ lessons: state.lessons }))(LessonSelectRow)
