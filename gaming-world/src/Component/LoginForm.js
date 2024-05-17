import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginForm = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      {!isAuthenticated ? (
        <div>
          <h2>Please log in to continue.</h2>
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transform hover:-translate-y-1 transition-transform duration-300"
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.nickname}!</h2>
          <button onClick={() => logout()}>Logout</button>
        </div>
      )}
    </>
  );
};

export default LoginForm;
