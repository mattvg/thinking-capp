import React from 'react'
import { connect } from 'react-redux'

import BackArrow from './BackArrow'
import StudyComplete from './StudyComplete'
import StudySlide from './StudySlide'

class Study extends React.Component {
	render() {
		var oactivity = this.props.activity.toJS()
		var study_num = oactivity.study_num
		var olessons = this.props.lessons.toJS()
		var loaded_name = oactivity.loaded_name
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
		var elements = loaded.elements
		if (study_num >= elements.length) {
			return <StudyComplete />
		}
		var element = elements[study_num]
		var to = "/lessons/" + loaded_name
		return (
			<div className="main">
				<BackArrow to={to} />
				<StudySlide element={element} />
			</div>
		)
	}
}
export default connect(state => ({ lessons: state.lessons, activity: state.activity }))(Study)
