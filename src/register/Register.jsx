import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../store/reducers/auth";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit", username, email, password);
    dispatch(registerUser({ username, email, password })).then((action) => {
      localStorage.setItem("accessToken", action.payload.token);
      navigate("/");
    });
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
