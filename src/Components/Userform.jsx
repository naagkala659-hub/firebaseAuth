import React, { useState } from "react";

import TextField from '@mui/material/TextField';  
import { Button } from "@mui/material";

import auth from '../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

const Userform = () => {

  const [newUser, SetNewUser] = useState({
    Name: "",
    Username: "",
    Phone: "",
  })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUP = () => {
    try {
      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res)
      .catch((error) => console.log(error))                                                                      
    )
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div >
      <TextField onChange={(e) => SetNewUser({...newUser, Name: e.target.value})} id="outlined-basic" label="Name" variant="outlined" />
      <br /><br />
      <TextField onChange={(e) => SetNewUser({...newUser, Username: e.target.value})} id="outlined-basic" label="Username" variant="outlined" />
      <br /><br />
      <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
      <br /><br />
      <TextField onChange={(e) => SetNewUser({...newUser, Phone: e.target.value})} id="outlined-basic" label="Phone" variant="outlined" />
      <br /><br />
      <TextField onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" />
      <br /><br />
      <Button onClick={SignUP} variant="outlined">Submit</Button>
    </div>

  );
};

export default Userform;
