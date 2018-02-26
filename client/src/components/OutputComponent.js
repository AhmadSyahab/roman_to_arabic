import React, { Component } from 'react';
import ListResult from './ListResult';

class OutputComponent extends Component {
	constructor() {	
      super();
      this.state = {
      	data: ''
      }   
	}	

	render() {
		return(
			<div>
			  <table className="table">
			  <thead>
			    <tr>
			      <td className="table-info" >Output</td>
			    </tr>
			   </thead> 
			    <tbody>
					{this.props.result.map((resultList,index) => {
						return(
							<ListResult key={index} listData={resultList}  />
						)
					})}
				</tbody>
				</table>
		    </div> 			
		)	
	}
}


export default OutputComponent