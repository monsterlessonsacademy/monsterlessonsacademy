import { useSelector, useDispatch } from "react-redux";

import { usersSelector, filteredUsersSelector } from "./store/selectors";

const App = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.users.username);
  const search = useSelector((state) => state.users.search);
  const users = useSelector(usersSelector);
  const filteredUsers = useSelector(filteredUsersSelector);
  console.log("filteredUsers", filteredUsers);

  const handleUser = (e) => {
    dispatch({ type: "CHANGE_USERNAME", payload: e.target.value });
  };

  const handleSearch = (e) => {
    dispatch({ type: "CHANGE_SEARCH", payload: e.target.value });
  };

  const addUser = () => {
    dispatch({ type: "ADD_USER" });
  };

  return (
    <div>
      <input type="text" value={username} onChange={handleUser} />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      <button onClick={addUser}>Add user</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
// import { Component } from "react";

// import { connect } from "react-redux";

// import { usersSelector, filteredUsersSelector } from "./store/selectors";

// class App extends Component {
//   handleUser = (e) => {
//     this.props.dispatch({ type: "CHANGE_USERNAME", payload: e.target.value });
//   };

//   handleSearch = (e) => {
//     this.props.dispatch({ type: "CHANGE_SEARCH", payload: e.target.value });
//   };

//   addUser = () => {
//     this.props.dispatch({ type: "ADD_USER" });
//   };

//   render() {
//     console.log("filteredUsers", this.props.filteredUsers);
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.props.username}
//           onChange={this.handleUser}
//         />
//         <input
//           type="text"
//           placeholder="Search"
//           value={this.props.search}
//           onChange={this.handleSearch}
//         />
//         <button onClick={this.addUser}>Add user</button>
//         <ul>
//           {this.props.users.map((user, index) => (
//             <li key={index}>{user}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   console.log("recalculating mapStateToProps", state);
//   return {
//     users: usersSelector(state),
//     username: state.users.username,
//     search: state.users.search,
//     filteredUsers: filteredUsersSelector(state),
//   };
// };

// export default connect(mapStateToProps)(App);
