import React, { Component } from "react"

export default class Counter extends Component {
	constructor(props){
		super(props);
		
	}
	render() {
	return (
		<div className="p-2">
		{this.props.name}
		{this.props.children}
		</div>
		
	)
}
}
