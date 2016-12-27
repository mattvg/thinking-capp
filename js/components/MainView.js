import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

console.log("1")

class MainView extends React.Component {
  constructor(props) {
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

export default connect(state => ({ cart: state.cart, site: state.site }))(MainView)

