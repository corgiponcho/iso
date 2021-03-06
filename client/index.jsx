// TODO: require("./index.less")
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import { Posts } from "./src/components/posts.jsx"
import rootReducers from "./src/reducers"
import PostContainer from "./src/containers/postContainer.js"

let store = createStore(
  rootReducers,
  applyMiddleware(
    thunkMiddleware
  )
)

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Link to="/posts">Posts</Link>
            <Route path="/posts" component={PostContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById("app"));
