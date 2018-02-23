import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_data } from '../actions/convertActions';

const inputStyle = {
	margin: 'auto',
	width: '50%',
	textAlign: 'center',
}


class InputComponent extends Component {
	constructor() {	
      super();
      this.state = {
      	stateInput: ''
      }   
	}	

	changeHandler(event){
		this.setState({
			[event.target.name] : event.target.value
		})
	}	


	updateState(e) {		
		let arrStr = this.state.stateInput.split(' ');
		if(arrStr[0] !== 'how'){
			if(arrStr.indexOf('Credits') === -1) {
				this.props.add_data(arrStr[0],arrStr[2])
				this.props.updatedContent()
			}else {
				let newArrStr = this.state.stateInput.split('is');
				this.props.add_data(newArrStr[0],newArrStr[1])
				this.props.updatedContent()
			}			
		}
	}


	render() {
		return(
			<div>
				<form>
				  <fieldset>
				    <div className="form-group">
				      <label>Input</label>
				      <input style={inputStyle} name="stateInput" onChange={(e) => this.changeHandler(e)} type="text" className="form-control" placeholder="insert the state" />					     
				    </div>					    			    
				  </fieldset>			  
				</form>	
				<button onClick={(e) => this.updateState(e)} type="button" className="btn btn-primary"> Submit </button>
		    </div> 			
		)	
	}
}

function mapStateToProps (state) {
  return {
    data: state.convertReducer.data
  }
}

function mapDispatchToProps (dispatch) {
  return {
    add_data: (dataRoman,dataArabic) => dispatch(add_data(dataRoman,dataArabic))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)