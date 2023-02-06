import { configureStore } from "@reduxjs/toolkit";
import Countreducer from './features/counter/counterSlice.jsx'

export default configureStore({
	reducer: {
		counter: Countreducer,
	},
})

