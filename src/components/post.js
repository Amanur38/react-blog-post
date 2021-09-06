import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost() {
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(postUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      });
  }

  renderPostElements(posts) {
    return posts.map((post, index) => {
      return (
        <div key={index} className="blog-item">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link
            to={{
              pathname: `${post.id}`,
            }}
          >
            View Post
          </Link>
        </div>
      );
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <div className="container">
            <h2 className="text-center">All Post Lists</h2>
        </div>
        <div className="container">
          <div className="row">
            {posts ? this.renderPostElements(posts) : null}
          </div>
        </div>
      </>
    );
  }
}

export default Post;
