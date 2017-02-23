import React from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router'
import { connect } from 'react-redux'

class SortingModeButton extends React.Component {
	constructor(props) {
		super(props)
	}
	
	onClick(event) {
		var lesson = this.props.lesson
		var dispatch = this.props.dispatch
		this.props.dispatch({type: "RESET_LESSON", payload: {} })
		dispatch({type: "LOAD_LESSON", payload: {lesson, dispatch} })
	}

	render() {
		var lesson = this.props.lesson
		var to = "/sorting"
		return (
			<div className='test-mode-button-container' onClick={this.onClick.bind(this)}>
				<Link to={to} onClick={this.onClick.bind(this)}>
					<img src="/public/images/sorting-mode-button.png" />
				</Link>
			</div>
		)
	}
}
export default connect(state => ({ lessons: state.lessons }))(SortingModeButton)
