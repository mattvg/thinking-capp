import React from 'react'
import { Link } from 'react-router'

export default class MyButton extends React.Component {
    render() {
    	return <Link className="my-button" to={this.props.to}>{this.props.children}</Link>
    }
}