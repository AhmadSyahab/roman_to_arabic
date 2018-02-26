import React, { Component } from 'react';
import ListData from './ListData';

class StateComponent extends Component {
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
			      <td className="table-info" >string</td>
			      <td className="table-info" >value</td>
			    </tr>
			   </thead> 
			    <tbody>
					{this.props.data.map((dataList,index) => {
						return(
							<ListData key={index} listData={dataList}  />
						)
					})}
				</tbody>
				</table>
		    </div> 			
		)	
	}
}


export default StateComponent