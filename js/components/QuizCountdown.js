import React from 'react'

import MyButton from "./MyButton"

export default class QuizCountdown extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var pos = this.props.pos
		var total = this.props.total
		var circles = []
		for (var i=0; i < total; i++) {
			var cn = "quiz-countdown-circle"
			if (pos >= i) {
				cn += " quiz-countdown-circle-complete"
			}
			circles.push({cn, i})
		}
		return (
			<div className="quiz-countdown">
				{circles.map(function(circle) {
					return <div key={circle.i} className={circle.cn} />
				})}
				<div className="clear"></div>
			</div>
		)
	}
}
