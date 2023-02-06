import React from "react"
import Ex01 from "./exercise/Ex01" 
import Ex02 from "./exercise/Ex02" 
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

export default function App(){
	return (
		<>
			<Router>
			<div className="p-2 grid grid-cols-12">
				<div className="p-2 bg-yellow-200 col-span-1 block h-auto">
					<ul className="p-2 text-black">
						<Link to="/exercise01"> <li>Ex1: Convert Temperature</li> </Link>
						<Link to="/exercise02"> <li>Exercise2</li> </Link>
					</ul>
				</div>
			
				{/*Routing */}
				<div className="p-2 bg-gray-700 col-span-11">
					<Routes>
						<Route path="/exercise01" element = {<Ex01 />} />
						<Route path="/exercise02" element = {<Ex02 />} />
					</Routes>
				</div>
			</div>
			</Router>	
		</>
	)
}
