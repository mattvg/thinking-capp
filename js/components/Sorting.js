import React from 'react'
import { connect } from 'react-redux'

class Sorting extends React.Component {
	render() {
		return (
			<div className="main">
				Work in progress
			</div>
		)
	}
}
export default connect(state => ({ lessons: state.lessons, activity: state.activity }))(Sorting)
