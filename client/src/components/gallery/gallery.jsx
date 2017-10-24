import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";


class Gallery extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('/api/v0/post')
      .then(res => res.json())
      .then(posts => this.setState({ posts: posts.data }));
  }

  render() {

    return (
      <div className="gallery-container">
        <h1>Posts</h1>
        {this.state.posts.map(post =>
          <div key={post.id}>{post.title}</div>
        )}
      </div>
    );
  }
}

export { Gallery };
