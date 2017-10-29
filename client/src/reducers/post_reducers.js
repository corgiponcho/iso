const posts = (state = [], action) => {
  switch (action.type) {
  	case "GET_ALL_POSTS":
  	  return [
  	    // TODO: remove this hardcodded value by calling the api
  	    // http://redux.js.org/docs/advanced/AsyncActions.html
				{
					id: 1,
	      	title: "awesome shop vacc - two dolla",
	      	body: "rent this shop vac",
				  status: "open",
				  lat: 134.0,
				  lon: 50.3,
				  userId: 1,
				  creator_id: 0
	      }
  	  ]
  	default:
  	  return state
  }
}

export default posts