import {
	REQUEST_POSTS,
	RECEIVE_POSTS,
} from "../actions/index.js"

export default function getPosts(
	state = {
		isFetching: false,
	  posts: []
	},
	action
) {
	switch (action.type) {
		case REQUEST_POSTS:
      return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_POSTS:
      return Object.assign({}, state, {
				isFetching: false,
				posts: action.posts
			})
		default:
		  return state
	}
}
