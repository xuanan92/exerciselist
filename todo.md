1. Break components into part: make the hierarchy
2. Build a static version in React: not using state at all
3. Identify the Minimal (but complete) Representation Of UI state
	Think of all the pieces of data in application:
		- the original list of products: passed as props
		- the search text the user has entered: is state
		- the value of the checkbox: is state
		- the filtered list of products: is cal from states or props
4. Identify where your state should live
5. Add inverse data flow

