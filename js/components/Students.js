import React from 'react'

export default class Students extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="main">
				back
				<h1>Students</h1>
				<div className="add-student">
					<input className="textinput" />
					<button>Add</button>
				</div>
			</div>
		)
	}
}