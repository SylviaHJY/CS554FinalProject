import { Button, TextField, Typography } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

import { AccountCircle } from "@mui/icons-material";

const ProfilePage = () => {
  const auth = getAuth();
  const [name, setName] = useState(
    auth.currentUser.displayName ? auth.currentUser.displayName : ""
  );
  const [email, setEmail] = useState(
    auth.currentUser.email ? auth.currentUser.email : ""
  );

  const editProfile = () => { };
  return (
    <MainLayout>
      <div className="container">
        <div className="profile">
          <h2>Profile</h2>
          <div className="pimage">
            {auth.currentUser.photoURL ? (
              <img src={auth.currentUser.photoURL} />
            ) : (
              <AccountCircle id="a_icon" />
            )}
          </div>

          <TextField
          className="custom-textfield"
          onChange={(e) => setName(e.target.value)}
          style={{ margin: "10px", width: "70%", color: "#292828" }}
          value={name}
          label="Name"
         />
         <Button
          className="custom-button"
          onClick={editProfile}
          disabled={auth.currentUser.displayName == name}
          variant={"contained"}
          style={{ color: "#646464" }}
        >
          Edit Profile
        </Button>
        <Button onClick={() => signOut(auth)}>Logout</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
