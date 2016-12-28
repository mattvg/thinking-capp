import React from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'
import MyButton from './MyButton'

class Quiz extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var olessons = this.props.lessons.toJS()
		var loaded = olessons.loaded
		console.log(loaded)
		if (loaded == undefined) {
			return <Loading />
		}
		if (loaded.name == "error") {
			return (
				<div>
					{loaded.error}
				</div>
			)
		}
		return (
			<div className="main">
				Quiz
			</div>
		)
	}
}

export default connect(state => ({ lessons: state.lessons }))(Quiz)
