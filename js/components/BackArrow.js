import React from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router'

export default class BackArrow extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		var to = this.props.to
		return (
			<div className="back-icon-container">
				<Link className="back-icon" to={to}>
					<img src="/public/images/back.png" />
				</Link>
			</div>
		)
	}
}
