import { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    username: "",
  };

  handleUser = (e) => {
    this.setState({ username: e.target.value });
  };

  addUser = () => {
    console.log("addUser", this.state.username);
    this.props.dispatch({ type: "ADD_USER", payload: this.state.username });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUser}
        />
        <button onClick={this.addUser}>Add user</button>
        <ul>
          {this.props.users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  const filteredUsers = state.filter((user) => {
    console.log("filtering users", user);
    return user.includes("foo");
  });
  return {
    users: state,
    filteredUsers,
  };
};

export default connect(mapStateToProps)(App);
