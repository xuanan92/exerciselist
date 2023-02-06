import React from "react"


function LoginButton(props){
	
	return (
		<button className="p-2" type="button" onClick= {props.onClick}>Login</button>
	)
}
export default LoginButton
