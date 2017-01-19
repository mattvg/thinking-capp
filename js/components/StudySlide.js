import React from 'react'

import TCElement from './TCElement'

export default class StudySlide extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		var name = this.props.element
		var dispatch = this.props.dispatch
		console.log(["Going to load", name])
		dispatch({type: "LOAD_ELEMENT", payload: {name, dispatch} })
	}

	render() {
		var element = this.props.element
		return (
			<div className="study-slide">
			<TCElement name={element} />
				Next
			</div>
		)
	}
}