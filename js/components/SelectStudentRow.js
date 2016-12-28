import React from 'react'
import { connect } from 'react-redux'

import MyButton from "./MyButton"

export default class SelectStudentRow extends React.Component {
	constructor(props) {
		super(props)
	}

	onClick(event) {
		var name = this.props.student.name
		this.props.dispatch({type: "SET_ACTIVE_STUDENT", payload: {name} })

	}

	render() {
		var student = this.props.student
		return (
			<div className="select-student-row-container">
				<MyButton key={student.name} className="my-button select-student-row" to="/lessons" onClick={this.onClick.bind(this)}>
					{student.name}
				</MyButton>
			</div>
		)
	}
}
