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
    this.props.addUser(this.state.username);
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

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  const usersWithFoo = state.filter((user) =>
    user.includes(ownProps.searchText)
  );
  return {
    users: state,
    usersWithFoo,
  };
};

const addUser = (username) => {
  return { type: "ADD_USER", payload: username };
};

const mapDispatchToProps = {
  addUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
