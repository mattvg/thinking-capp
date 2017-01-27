import React from 'react'
import { connect } from 'react-redux'

import BackArrow from './BackArrow'
import Loading from './Loading'
import MyButton from './MyButton'

class LessonMenu extends React.Component {
	constructor(props) {
		super(props)
	}

	onClick(event) {
		this.props.dispatch({type: "RESET_LESSON", payload: {} })
	}

	render() {
		var oactivity = this.props.activity.toJS()
		var olessons = this.props.lessons.toJS()
		var loaded = oactivity.loaded
		if (loaded == undefined) {
			return <Loading />
		}
		if (loaded.name == "error") {
			return (
				<div>
					{loaded.error}
				</div>
			)
		}
		var to = "/lessons"
		return (
			<div className="main">
				<BackArrow to={to} />
				<div className="row">
					<div className="lesson-menu-mode" onClick={this.onClick.bind(this)}>
						<MyButton to="/study">Study Mode</MyButton>
					</div>
					<div className="lesson-menu-mode" onClick={this.onClick.bind(this)}>
						<MyButton to="/sorting">Sorting Mode</MyButton>
					</div>
					<div className="lesson-menu-mode" onClick={this.onClick.bind(this)}>
						<MyButton to="/quiz">Quiz Mode</MyButton>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(state => ({ activity: state.activity, lessons: state.lessons }))(LessonMenu)
