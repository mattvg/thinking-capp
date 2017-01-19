import React from 'react'
import { connect } from 'react-redux'

import MyButton from "./MyButton"

class TCElement extends React.Component {
	constructor(props) {
		super(props)
		var name = this.props.name
	}

	render() {
		var oelements = this.props.elements.toJS()
		var name = this.props.name
		console.log(name)
		console.log(oelements.elements)
		var element = oelements.elements[name]
		if (element == undefined) {
			return (
				<div className="col-xs-12 col-sm-6 element">
				Missing element: {this.props.name}
				</div>
			)			
		} else {
			var oconfig = this.props.config.toJS()
			var language = oconfig.language
			var name = element['name'][language]['text']
			var src = "https://raw.githubusercontent.com/kylepolich/thinking-capp/dev/public" + element['img']['file']
			return (
				<div className="col-xs-12 col-sm-6 element">
				<img src={src} />
				{name}
				</div>
			)
		}
	}
}

export default connect(state => ({ config: state.config, elements: state.elements }))(TCElement)
