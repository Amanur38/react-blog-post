import React from "react";
import { withRouter } from "react-router-dom";

class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.postId;
    this.getSinglePost(id);
  }

  getSinglePost(id) {
    const singlePostUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(singlePostUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ post: data });
      });
  }

  renderPostElements(posts) {
    return posts.map((post, index) => {
      return (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      );
    });
  }

  render() {
    const { post } = this.state;
    return (
      <>
        <div className="container">
          <h2 className="text-center">Single Post</h2>
        </div>
        <div className="container">
          <div className="row">
            {post ? (
              <div className="single-post">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(SinglePost);
