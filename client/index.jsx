// require("./index.less")
import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"
import { Gallery } from "./src/components/gallery/gallery.jsx"

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
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          </div>
          <Route exact path="/" component={Home}/>
          <Route path="/gallery" component={Gallery}/>
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
