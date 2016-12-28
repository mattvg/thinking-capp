import React from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router'

export default class Grade extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div className='grades-container'>
				<div className='grade'>A</div>
				<div className='grade'>B</div>
				<div className='grade'>C</div>
			</div>
		)
	}
}
