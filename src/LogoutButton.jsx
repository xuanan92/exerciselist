import React from "react"

function LogoutButton(props){
	
	return (
		<button className="p-2" type="button" onClick= {props.onClick}>Logout</button>
	)
}

export default LogoutButton
