import { Link, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { getCurrentUser, logout } from "./store/reducers/auth";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Link to="/">Home</Link>
      {auth.currentUser === null && (
        <Fragment>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Fragment>
      )}
      {auth.currentUser && (
        <span onClick={() => dispatch(logout())}>Logout</span>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
