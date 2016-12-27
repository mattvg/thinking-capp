import React from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router'

export default class Header extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div className='header row row-centered'>
				<h1>Thinking Capp</h1>
			</div>
		)
	}
}
