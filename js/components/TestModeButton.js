import React from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router'

export default class TestModeButton extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		var to = "/quiz"
		return (
			<div className='test-mode-button-container'>
				<Link to={to}>
					<img src="/public/images/test-mode-button.png" />
				</Link>
			</div>
		)
	}
}
