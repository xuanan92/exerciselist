import React from "react"
import UserGreeting from "./UserGreeting.jsx" 
import GuestGreeting from "./GuestGreeting.jsx" 

function Greeting(props){
	const isLoggedIn = props.isLoggedIn
	if (isLoggedIn){
		return <UserGreeting />
	}
	return <GuestGreeting />
}
export default Greeting
