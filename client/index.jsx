// require("./index.less")
import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import { Posts } from "./src/components/post/post.jsx"

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <div className="module-container">
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          </div>
          <Route exact path="/" component={Home}/>
          <Route path="/posts" component={Posts}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

render(<App/>, document.getElementById("app"));
