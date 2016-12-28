import React from 'react'
import { connect } from 'react-redux'

import NavLink from './NavLink'

class LessonMenu extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var pathname = this.props.location.pathname
		var prefix = '/lessons/'
		var i = pathname.indexOf(prefix)
		i += '/lessons/'.length
		var name = pathname.substring(i, pathname.length)
		var olessons = this.props.lessons.toJS()
		var lesson = olessons.lessons[name]
		console.log(lesson)
		this.props.dispatch({type: "LOAD_LESSON", payload: {lesson} })
		return (
			<div>
				{pathname}
			</div>
		)
	}
}

export default connect(state => ({ lessons: state.lessons }))(LessonMenu)
