import React from "react"
import ReactDOM from "react-dom"
import { Link } from 'react-router'

export default class LessonStatisticsButton extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div className='lesson-statistics-button-container'>
				<img src="/public/images/lesson-statistics-button.png" />
			</div>
		)
	}
}
