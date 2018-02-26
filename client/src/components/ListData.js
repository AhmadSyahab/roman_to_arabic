import React, { Component } from 'react'

class ListData extends Component{
	render() {
		return (
		    <tr>
		      <td> { this.props.listData.stringData } </td>
		      <td> { this.props.listData.romanData } </td>
		    </tr>
		)
	}
}



export default ListData