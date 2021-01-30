import { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  state = {
    username: "",
  };

  handleUser = (e) => {
    this.props.dispatch({ type: "CHANGE_USERNAME", payload: e.target.value });
  };

  addUser = () => {
    this.props.dispatch({ type: "ADD_USER" });
  };

  render() {
    console.log("this", this.props);
    return (
      <div>
        <input
          type="text"
          value={this.props.username}
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
  return {
    users: state.users.users,
    username: state.users.username,
  };
};

export default connect(mapStateToProps)(App);
