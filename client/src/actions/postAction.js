import fetch from "isomorphic-fetch"

export const REQUEST_POSTS = "REQUEST_POSTS"
export const RECEIVE_POSTS = "RECEIVE_POSTS"

function requestPosts() {
	return {
		type: REQUEST_POSTS
	}
}

function receivePosts(json) {
	return {
		type: RECEIVE_POSTS,
		posts: json.data,
		receivedAt: Date.now()
	}
}

export function fetchPosts() {
  return dispatch => {
		dispatch(requestPosts())
    return fetch(`http://localhost:3000/api/v0/post`)
		  .then(response => {
				return response.json()
			})
			.then(json => {
				console.log("successfully fetchPosts: json >>>>", json)
				dispatch(receivePosts(json))
			})
	}
}
