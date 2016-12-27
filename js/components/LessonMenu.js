import React from 'react'

console.log("LM1")

export default class LessonMenu extends React.Component {
	constructor(props) {
		console.log("LM2")
		super(props)
		console.log("LM3")
	}

	render() {
		console.log("render LessonMenu.js")
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