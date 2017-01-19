import React from 'react'
import { connect } from 'react-redux'

import StudyElement from './StudyElement'

class StudySlide extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		var name = this.props.element
		var dispatch = this.props.dispatch
		console.log(["Going to load", name])
		dispatch({type: "LOAD_ELEMENT", payload: {name, dispatch} })
	}

	onClick(event) {
		this.props.dispatch({type: "ADVANCE_STUDY", payload: {} })
	}

	render() {
		var element = this.props.element
		return (
			<div className="study-slide">
			<StudyElement name={element} />
			<button className="study-slide-next" onClick={this.onClick.bind(this)}>
				Next
			</button>
			</div>
		)
	}
}
export default connect(state => ({ activity: state.activity, lessons: state.lessons }))(StudySlide)
