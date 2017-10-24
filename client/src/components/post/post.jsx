import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";


class Posts extends React.Component {
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
        <h2>Posts</h2>
        {this.state.posts.map(post =>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
          </div>
        )}
      </div>
    );
  }
}

export { Posts };
