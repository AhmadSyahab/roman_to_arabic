import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputComponent from './InputComponent'
import StateComponent from './StateComponent'

class Home extends Component {
	constructor() {	
      super();
      this.state = {
      	update: false
      }   
	}	

	updatedContent = () => {
		this.setState({
			update : true
		})
	}
	
	render() {
		return(
			<div>
				<InputComponent updatedContent={this.updatedContent} />
				<StateComponent data={this.props.data} />
		    </div> 			
		)	
	}
}

function mapStateToProps (state) {
  return {
    data: state.convertReducer.data
  }
}

export default connect(mapStateToProps)(Home)