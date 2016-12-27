import React from 'react'
import { connect } from 'react-redux'

class SelectStudent extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="main">
				<div className="back-icon-container"><img src="/public/images/back.png" /></div>
				<input className="my-input input-add-student" />
				<div className="my-button">Add student</div>
			</div>
		)
	}
}

export default connect(state => ({ students: state.students }))(SelectStudent)
