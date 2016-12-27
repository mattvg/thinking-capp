import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

console.log("1.02")

class MainView extends React.Component {
  constructor(props) {
    console.log("1.5")
    super(props)
    console.log("2")
  }

  static propTypes = {
      children: PropTypes.object
  }

  render() {
  	console.log("index.js render")
    return (
        <div className="thinking-capp">
          <div className="container-fluid">
            <div className="row row-centered">
            </div>
            <div className="row row-centered">
            </div>
            {this.props.children}
          </div> 
        </div>
    )
  }
}

export default connect(state => ({ lessons: state.lessons }))(MainView)
