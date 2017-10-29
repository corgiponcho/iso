import { connect } from "react-redux"
import { getAllPosts } from "../actions";
import Posts from "../components/posts.jsx"

const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}

const mapDispatchToProps = dispatch => {
  return {
    onPostClick: () => {
      dispatch(getAllPosts())
    }
  }
}

const PostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostContainer
