import React, { Component } from "react";
import Post from "./Post";
import Comments from "./Comments";

import { firestore } from "../firebase";
import { collectIdsAndDocs, withRouter } from "../utilities";
import withUser from "./withUser";

class PostPage extends Component {
  state = { post: null, comments: [] };

  get postId() {
    return this.props.router.params.id;
  }

  get postRef() {
    return firestore.doc(`posts/${this.postId}`);
  }

  get commentsRef() {
    return this.postRef.collection("comments");
  }

  unsubscribeFromPost = null;
  unsubscribeFromComments = null;

  componentDidMount = async () => {
    this.unsubscribeFromPost = this.commentsRef.onSnapshot((snapshot) => {
      const comments = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ comments });
    });

    this.unsubscribeFromComments = this.postRef.onSnapshot((snapshot) => {
      const post = collectIdsAndDocs(snapshot);
      this.setState({ post });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromPost();
    this.unsubscribeFromComments();
  };

  createComment = (comment) => {
    const { user } = this.props;
    this.commentsRef.add({
      ...comment,
      user,
    });
  };

  render() {
    const { post, comments } = this.state;
    return (
      <div>
        {post && <Post {...post} />}
        <Comments comments={comments} onCreate={this.createComment} />
      </div>
    );
  }
}

export default withRouter(withUser(PostPage));
