import React, { Component } from 'react'

class ListResult extends Component{
	render() {
		return (
		    <tr>
		      <td> { this.props.listData.countResult } </td>
		    </tr>
		)
	}
}



export default ListResult