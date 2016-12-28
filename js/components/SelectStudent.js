import React from 'react'
import { connect } from 'react-redux'

import SelectStudentRow from "./SelectStudentRow"

class SelectStudent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ""
		}
	}

	onChangeName(event) {
		var i = event.target
		var name = i.value
		this.setState({name})
	}

	onClick(event) {
		var name = this.state.name
		this.props.dispatch({type: "ADD_STUDENT", payload: {name} })
	}

	render() {
		var ostudents = this.props.students.toJS()
		var students = ostudents.students
		console.log(students)
		return (
			<div className="main">
				<div className="back-icon-container"><img src="/public/images/back.png" /></div>
				<div className="row">
					<div className="col-sm-8">
						<input className="my-input input-add-student" onChange={this.onChangeName.bind(this)} value={this.state.name}  />
					</div>
					<div className="col-sm-4 my-button" onClick={this.onClick.bind(this)}>Add student</div>
				</div>
				{Object.keys(students).map(function(key, index) {
					var student = students[key]
					return <SelectStudentRow student={student} />
				})}
			</div>
		)
	}
};


export default connect(state => ({ students: state.students }))(SelectStudent)