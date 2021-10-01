import React, { useState, useEffect } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import firebase from 'firebase/app';
import 'firebase/auth';

export function App() {

  const provider = new firebase.auth.GoogleAuthProvider();

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email)
        console.log("estas logueado")
      } else {
        console.log("no logueado")
      }
    })
  }, [])

  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log("estoy logeado con google")
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = error.credential
        console.log(`error en login errorCode:${errorCode}, msg:${errorMessage}`)
      });
  }

  const signOut = () => {
    firebase.auth().signOut();
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>

        { user ? (
          <div>
            {user}
            <Button onClick={signOut} color="inherit">Logout</Button>
          </div>
        ) : 
        (
        <Button onClick={signInWithGoogle} color="inherit">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

