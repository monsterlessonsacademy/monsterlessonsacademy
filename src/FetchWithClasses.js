import { Component } from "react";
import axios from "axios";

class FetchWithClasses extends Component {
  state = {
    posts: [],
    isLoading: false,
  };

  componentDidMount() {
    console.log("initialized FetchWithClasses");
    this.setState({ isLoading: true });
    axios.get("http://localhost:3004/posts").then((response) => {
      console.log("response", response);
      this.setState({ posts: response.data, isLoading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    );
  }
}

export default FetchWithClasses;
