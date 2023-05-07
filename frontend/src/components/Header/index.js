import { getAuth } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";
import { Typography } from "@mui/material";

const Header = () => {
  const { currentUser } = getAuth();

  return (
    <header>
      <div className="htxt" onClick={() => navigate("/")}>
        <Typography variant={"h1"} fontStyle={"italic"}>
          RunMate
        </Typography>
      </div>

      <div className="auth-links">
        {currentUser ? (
          <>
            {window.location.pathname !== "/friends" && (
              <NavLink className="nav-link" to="/friends">
                Friends
              </NavLink>
            )}
            {window.location.pathname !== "/profile" ? (
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            ) : (
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            )}
          </>
        ) : (
          <>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/mymap"}>Map</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>SignUp</NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
