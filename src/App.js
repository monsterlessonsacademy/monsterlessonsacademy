import { Component } from "react";
import { connect } from "react-redux";

import { usersSelector, filteredUsersSelector } from "./store/selectors";

class App extends Component {
  handleUser = (e) => {
    this.props.dispatch({ type: "CHANGE_USERNAME", payload: e.target.value });
  };

  handleSearch = (e) => {
    this.props.dispatch({ type: "CHANGE_SEARCH", payload: e.target.value });
  };

  addUser = () => {
    this.props.dispatch({ type: "ADD_USER" });
  };

  render() {
    console.log("filteredUsers", this.props.filteredUsers);
    return (
      <div>
        <input
          type="text"
          value={this.props.username}
          onChange={this.handleUser}
        />
        <input
          type="text"
          placeholder="Search"
          value={this.props.search}
          onChange={this.handleSearch}
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
  console.log("recalculating mapStateToProps", state);
  return {
    users: usersSelector(state),
    username: state.users.username,
    search: state.users.search,
    filteredUsers: filteredUsersSelector(state),
  };
};

export default connect(mapStateToProps)(App);
