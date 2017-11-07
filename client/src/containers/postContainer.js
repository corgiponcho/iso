import { connect } from "react-redux"
import Posts from "../components/posts.jsx"

const mapStateToProps = state => {
	return state.allPosts
}

const PostContainer = connect(
  mapStateToProps
)(Posts)

export default PostContainer
