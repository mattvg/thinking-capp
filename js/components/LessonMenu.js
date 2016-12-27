import React from 'react'
import { connect } from 'react-redux'

class LessonMenu extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="main">
				<div className="lesson-row">
					<div>Digestive</div>
					<div>A B C</div>
					<div>Test Mode</div>
					<div>stats</div>
				</div>
				<div className="lesson-row">
					<div>Nervous System</div>
					<div>A B C</div>
					<div>Test Mode</div>
					<div>stats</div>
				</div>
			</div>
		)
	}
}

export default connect(state => ({ lessons: state.lessons }))(LessonMenu)
