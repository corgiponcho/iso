import { combineReducers } from "redux"
import posts from "./post_reducers"

const reducers = combineReducers({
	posts,
})

export default reducers