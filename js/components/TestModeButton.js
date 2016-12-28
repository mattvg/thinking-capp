import React from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router'

export default class TestModeButton extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div className='test-mode-button-container'>
				<img src="/public/images/test-mode-button.png" />
			</div>
		)
	}
}
