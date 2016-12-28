import React from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'
import MyButton from './MyButton'

class LessonMenu extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var olessons = this.props.lessons.toJS()
		var loaded = olessons.loaded
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
		return (
			<div className="main">
				<div className="back-icon-container"><img src="/public/images/back.png" /></div>
				<div className="row">
					<div>Study Mode</div>
					<div>Sorting Mode</div>
					<div><MyButton to="/quiz">Quiz Mode</MyButton></div>
				</div>
			</div>
		)
	}
}

export default connect(state => ({ lessons: state.lessons }))(LessonMenu)
