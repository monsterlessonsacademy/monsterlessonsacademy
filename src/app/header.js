import Link from "next/link";
import { useAuth } from "./context/auth";
import { Fragment } from "react";
import { logout } from "./firebase";

const Header = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        {currentUser === null && (
          <Fragment>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </Fragment>
        )}
      </div>
      {currentUser && (
        <div>
          {currentUser.username} <span onClick={() => logout()}>Logout</span>
        </div>
      )}
    </div>
  );
};
export default Header;
