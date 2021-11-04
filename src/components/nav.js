import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { auth } from "../firebaseConfig";
import AuthContext from '../../store/auth-context';

function Navbar() {
    const authCtx = useContext(AuthContext);
  return (
    <div className="flex  justify-between items-center lg:px-10  py-2 px-3">
      <div className="flex flex-col justify-center ">
        <p className="text-black cursor-default uppercase font-Montserrat font-bold tracking-wider text-3xl">
          Sigma
        </p>
      </div>
      <div className="flex items-center ">
        {!authCtx.isLoggedIn && (
          <Link
            className="text-quaternary lg:ml-4 lg:p-3 hover:text-tertiary transition-colors duration-300  font-sans font-medium text-lg p-2"
            to="/signup"
          >
            Signup
          </Link>
        )}
        {!authCtx.isLoggedIn && (
          <Link
            className="text-quaternary lg:ml-4 lg:p-3 hover:text-tertiary transition-colors duration-300  font-sans font-medium text-lg p-2"
            to="/login"
          >
            Login
          </Link>
        )}
        {!authCtx.isLoggedIn && (
          <button
            className="text-quaternary lg:ml-4 lg:p-3 hover:text-tertiary transition-colors duration-300  font-sans font-medium text-lg p-2"
            onClick={() => authCtx.signOut()}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;