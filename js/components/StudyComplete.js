import React from 'react'
import { connect } from 'react-redux'

import BackArrow from './BackArrow'
import Loading from './Loading'
import MyButton from './MyButton'

class StudyComplete extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var oactivity = this.props.activity.toJS()
		var to = "/lessons"
		return (
			<div className="main">
				<h1>Studying Complete!</h1>
				<BackArrow to={to} />
			</div>
		)
	}
}

export default connect(state => ({ lessons: state.lessons, activity: state.activity }))(StudyComplete)
