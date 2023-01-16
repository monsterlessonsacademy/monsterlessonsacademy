import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("token")) {
        setCurrentUser({ id: "1", name: "foo" });
      } else {
        setCurrentUser(null);
      }
    }, 2000);
  }, []);

  if (currentUser === undefined) {
    return null;
  }

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Auth;
