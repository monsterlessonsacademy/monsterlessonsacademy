"use client";

import { useState } from "react";
import { register } from "../firebase";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(email, password, username);
      router.push("/");
    } catch (err) {
      console.log("errr", err.code);
      setErrorMessage(err.code);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {errorMessage && <div>{errorMessage}</div>}
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
