import React from "react";
import { render } from "react-dom";

class Posts extends React.Component {
  constructor(props){
    super(props);

    console.log("PROPS", props)
  }

  render() {
    return (
      <div className="gallery-container">
        <h2>Posts</h2>
        <button onClick={() => this.props.onPostClick()}>get posts</button>
        { this.props.posts.map((post, i) =>
          <div key={post.id}>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Posts
