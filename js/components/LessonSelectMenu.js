import React from 'react'
import { connect } from 'react-redux'

import LessonSelectRow from "./LessonSelectRow"

class LessonSelectMenu extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var olessons = this.props.lessons.toJS()
		var lessons = olessons.lessons
		console.log(lessons)
		return (
			<div className="main">
				<div className="back-icon-container"><img src="/public/images/back.png" /></div>
				<div className="row">
					{Object.keys(lessons).map(function(key, index) {
						var lesson = lessons[key]
						return <LessonSelectRow key={key} lesson={lesson} />
					})}
				</div>
			</div>
		)
	}
}

export default connect(state => ({ lessons: state.lessons }))(LessonSelectMenu)
