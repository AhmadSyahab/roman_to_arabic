import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_data } from '../actions/convertActions';
import { add_result } from '../actions/outputActions';
import { add_credits } from '../actions/outputActions';
import axios from 'axios';

const inputStyle = {
	margin: 'auto',
	width: '50%',
	textAlign: 'center',
}


class InputComponent extends Component {
	constructor() {	
      super();
      this.state = {
      	stateInput: '',
      	credit: '',
      }   
	}	

	changeHandler(event){
		this.setState({
			[event.target.name] : event.target.value
		})
	}	


	updateState(e) {		
		let arrStr = this.state.stateInput.split(' ');
		if(arrStr[0] !== 'how' && arrStr[2] !== undefined){
			if(arrStr.indexOf('Credits') === -1 ) {
				this.props.add_data(arrStr[0],arrStr[2])
				this.props.updatedContent()
			}else {
				let newArrStr = this.state.stateInput.split(' is ');
				let splitArr = newArrStr[0].split(' ')
				let isState = splitArr[splitArr.length-1]
				let isCredit = Number(newArrStr[1].split(' ')[0])
				let tempResult = ''

				for(let i = 0 ; i < splitArr.length-1 ; i++) {
					this.props.data.forEach(data => {
						if(data.stringData === splitArr[i]){
							tempResult = tempResult + data.romanData
						}
					})
				}

				axios.post('http://localhost:3000/convert',{
					roman : tempResult
				})
				.then(result => {
					let newResult = isCredit/result.data.result
					this.props.add_data(isState,newResult)
					this.props.updatedContent()
				})
				.catch(err => {
					console.log(err)
				})				
			}			
		}else if(arrStr[0] === 'how'){
			if(arrStr[1] === 'much' && arrStr[arrStr.length-1] === '?'){
				let newArrStr = this.state.stateInput.split(' is ');

				if(newArrStr[1] === undefined) {
					this.props.add_result('I have no idea what you are talking about')
					this.props.updatedContent()
					return false;
				}

				let splitArr = newArrStr[1].split(' ');
				let tempResult = ''

				for(let i = 0 ; i < splitArr.length-1 ; i++) {
					this.props.data.forEach(data => {
						if(data.stringData === splitArr[i]){
							tempResult = tempResult + data.romanData
						}
					})
				}	

				axios.post('http://localhost:3000/convert',{
					roman : tempResult
				})
				.then(result => {
					splitArr.splice(splitArr.length-1,1,`is ${result.data.result}`)
					this.props.add_result(splitArr.join(' '))
					this.props.updatedContent()
				})
				.catch(err => {
					console.log(err)
				})	
		
			}else if(arrStr[1] === 'many' && arrStr[2] === "Credits" && arrStr[arrStr.length-1] === '?'){
				let newArrStr = this.state.stateInput.split(' is ');
				let splitArr = newArrStr[1].split(' ');
				let tempResult = ''

				for(let i = 0 ; i < splitArr.length-2 ; i++) {
					this.props.data.forEach(data => {
						if(data.stringData === splitArr[i]){
							tempResult = tempResult + data.romanData
						}
					})
				}	

				this.props.data.forEach(data => {
					if(data.stringData === splitArr[splitArr.length-2]){
						this.setState({
							credit: data.romanData
						})
					}
				})

				axios.post('http://localhost:3000/convert',{
					roman : tempResult
				})
				.then(result => {
					splitArr.splice(splitArr.length-1,1,`is ${result.data.result} Credits`)

					this.props.add_credits(splitArr.join(' '), this.state.credit)
					this.props.updatedContent()
				})
				.catch(err => {
					console.log(err)
				})	
			}else {
				this.props.add_result('I have no idea what you are talking about')
				this.props.updatedContent()
			}				
		}
	}


// romanData
// :
// "X"
// stringData
// :
// "ases"

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
    add_data: (dataRoman,dataArabic) => dispatch(add_data(dataRoman,dataArabic)),
    add_result: (dataRoman) => dispatch(add_result(dataRoman)),
    add_credits: (countResult, credit) => dispatch(add_credits(countResult, credit))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)