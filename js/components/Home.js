import React from 'react'

import MyButton from "./MyButton"

export default class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="main">
				<div className="config-icon-container"><img src="/public/images/config.png" /></div>
				<h1>Thinking Cap</h1>
				<div className="logo-container"><img src="/public/images/logo.png" /></div>
				<MyButton to="/students">Start!</MyButton>
			</div>
		)
	}
}
