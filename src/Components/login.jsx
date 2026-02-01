import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import auth from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { signInWithPopup,GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then((res) =>
        console.log(res).catch((error) => console.log(error)),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const Google = () => {
    const provider = new GoogleAuthProvider();

    try {
      signInWithPopup(auth, provider)
      .then((res) =>
        console.log(res).catch((error) => console.log(error)),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const Github = () => {

    const provider = new GithubAuthProvider();

    try {
      signInWithPopup(auth, provider)
      .then((res) =>
        console.log(res).catch((error) => console.log(error)),
      );
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <br />
      <br />
      <Button onClick={Login} variant="outlined">
        Login
      </Button>
      <br />
      <br />
      <Button onClick={Google} variant="outlined">
        SignINGoogle
      </Button>
      <br /><br />
        <Button onClick={Github} variant="outlined">
        SignINGithub
      </Button>
    </div>
  );
};

export default Login;
