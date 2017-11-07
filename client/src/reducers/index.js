import { combineReducers } from "redux"
import getPosts from "./postReducers"

const rootReducers = combineReducers({
	allPosts: getPosts
})

export default rootReducers
