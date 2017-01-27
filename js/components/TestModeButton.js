import React from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router'

export default class TestModeButton extends React.Component {
	constructor(props) {
		super(props)
	}
	
	onClick(event) {
		this.props.dispatch({type: "RESET_LESSON", payload: {} })
	}

	render() {
		var to = "/quiz"
		return (
			<div className='test-mode-button-container'>
				<Link to={to} onClick={this.onClick.bind(this)}>
					<img src="/public/images/test-mode-button.png" />
				</Link>
			</div>
		)
	}
}
